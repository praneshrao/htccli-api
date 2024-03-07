import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      TempleName: string({
        required_error: "TempleName is required",
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


  export const createProfileSchema = object({
    ...payload
  });

  export const updateProfileSchema = object({
    ...payload,
    ...params
  })

  export type CreateProfileInput = TypeOf<typeof createProfileSchema>;
  export type UpdateProfileInput = TypeOf<typeof updateProfileSchema>;