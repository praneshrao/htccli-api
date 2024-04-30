import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      AnnouncementName: string({
        required_error: "AnnouncementName is required",
      }),
      ShortDesc: string({
        required_error: "ShortDesc is required"
      }),
      AnnouncementDate: string({
        required_error: "Announcement date is required"
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