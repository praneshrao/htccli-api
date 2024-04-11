import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      EducationName: string({
        required_error: "Education Name is required",
      }),
      EducationTypeId: string({
        required_error: "Education Type Id is required"
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