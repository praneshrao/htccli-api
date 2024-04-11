import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      DonationName: string({
        required_error: "Donation Name is required",
      }),
      DonationTypeId: string({
        required_error: "Donation Type Id is required"
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