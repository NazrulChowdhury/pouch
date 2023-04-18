import { string } from "zod";
import { postSchema } from "./post.schema";

export const postWithIdSchema = postSchema.extend({
    body: postSchema.shape.body.extend({
      postId: string({
        required_error: "PostId is required",
      })
    }),
})