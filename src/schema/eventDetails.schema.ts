import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      Description: string({
        required_error: "Event Detail Description is required",
      }),
      StartDate: string({
        required_error: "Event Detail Start date is required"
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