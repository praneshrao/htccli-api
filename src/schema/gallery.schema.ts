import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      GalleryTypeId: string({
        required_error: "Gallery Type Id is required",
      }),
      Title: string({
        required_error: "Title is required"
      })
    })
  }

  const params = {
    params: object({
      Id: string({
        required_error: "Id is required",
      }),
    }),
  };


  export const createScheme = object({
    ...payload
  });

  export const updateSchema = object({
    ...payload,
    ...params
  })

  export type CreateInput = TypeOf<typeof createScheme>;
  export type UpdateInput = TypeOf<typeof updateSchema>;