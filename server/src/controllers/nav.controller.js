import { getAllPosts } from "../service/post.service.js"

const navController = async(req, res, next) => {
    try{
        const posts = await getAllPosts(req.user)
        const navs = posts.map(post => post.tags).reduce((acc, tags) => {
            tags.map(tag => {
              const found = acc.find(el => el == tag) 
              !found && acc.push(tag)
            })
            return acc
          }, [])
        res.send(navs)
    } catch (error){
        next(error)
    }
}

export default navController