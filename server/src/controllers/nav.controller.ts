import { Request, Response, NextFunction } from "express"
import { getAllPosts } from "@services/post.service"


const navHandler = async(req: Request, res:Response, next:NextFunction) => {
  try{
    const posts = await getAllPosts(req.user!)
    const navs = posts.map(post => post.tags).reduce((acc, tags) => {
      tags.map(tag => {
        const found = acc.find(el => el === tag) 
        !found && acc.push(tag)
      })
      return acc
      }, [])
    res.send(navs)
  } catch (error){
      next(error)
  }
}

export default navHandler