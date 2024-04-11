import { object, string, TypeOf } from "zod";
import SponsorshipType from "../db/models/sponsorshipType.model";

const payload = {
    body: object({
      SponsorshipType: string({
        required_error: "Sponsorship Type is required",
      }),
      Amount: string({
        required_error: "Amount is required"
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