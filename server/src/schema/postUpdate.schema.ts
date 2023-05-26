import { string } from "zod";
import { postSchema } from "./post.schema";

export const postDocumentSchema = postSchema.extend({
    body: postSchema.shape.body.extend({
      _id: string({
        required_error: "PostId is required",
      })
    }),
})