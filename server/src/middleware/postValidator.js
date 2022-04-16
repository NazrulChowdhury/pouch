import * as yup from "yup"
import { ApiError } from "../Error/ApiError.js"
 
const postSchema = yup.object({
    title: yup.string().max(200).required(),
    description: yup.string().max(5000).required(),
    tags: yup.array().of(yup.string()).min(1). required()
}).required()

const validPost = async(req,res,next) => { 
   try{
       await postSchema.validate(req.body.data)
       next()
       return 
   } catch(error){
       return next(ApiError.badRequest('Please enter a valid schema'))
   }
}

export default validPost