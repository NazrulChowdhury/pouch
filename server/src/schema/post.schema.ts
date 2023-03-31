
import { object, string, TypeOf } from "zod";
import { POST_DESCRIPTION_MAX_LIMIT, POST_TAGS_MAX_LIMIT, POST_TITLE_MAX_LIMIT } from "../environment";


export const postSchema = object({
    body: object({
        userId: string({
        required_error: "user id is required",
      }),
      title: string({
        required_error: "Title is required",
      })
      .max(POST_TITLE_MAX_LIMIT, `Maximum Title character limit is ${POST_TITLE_MAX_LIMIT}`),
      description: string({
        required_error: "Description is required",
      })
      .max(POST_DESCRIPTION_MAX_LIMIT, `Maximum character limit for description is ${POST_DESCRIPTION_MAX_LIMIT}`),
      tags : string().array().nonempty({
        message : "Must have at least one tag"
      })
      .max(POST_TAGS_MAX_LIMIT,`Maximum ${POST_TAGS_MAX_LIMIT} allowed`)
    })
});
//const stringArraySchema = z.array(z.string().max(50)).min(1).max(10);