import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      DeityName: string({
        required_error: "DietyName is required",
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


  export const createDeitySchema = object({
    ...payload
  });

  export const updateDeitySchema = object({
    ...payload,
    ...params
  })

  export type CreateDeityInput = TypeOf<typeof createDeitySchema>;
  export type UpdateDeityInput = TypeOf<typeof updateDeitySchema>;