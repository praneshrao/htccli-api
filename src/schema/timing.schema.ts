import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      DayTypeId: string({
        required_error: "Day Type Id is required",
      }),
      DayName: string({
        required_error: "Day Name is required"
      }),
      Duration: string({
        required_error: "Duration is required"
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