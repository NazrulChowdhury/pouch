// export{ default as EditPost} from "./EditPost"
// export { default as ViewPost} from "./ViewPost"
// export {default as DeletePost} from "./DeletePost"
// export {default as Post} from "./Post"

import  Post from "./Post"
import EditPost from "./EditPost"
import ViewPost from "./ViewPost"
import DeletePost from "./DeletePost"
import AddPost from "./AddPost"
import AddNewPostButton from "./AddNewPostButton"

Post.EditPost = EditPost
Post.ViewPost = ViewPost
Post.DeletePost = DeletePost
Post.AddPost = AddPost
Post.AddNewPostButton = AddNewPostButton

export default Post