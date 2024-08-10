import { number, object, string, TypeOf } from "zod";

const payload = {
    body: object({
      EventName: string({
        required_error: "Event Name is required",
      }),
/*        EventTypeID: string({
        required_error: "Event Type Id is required"
      }), */
      ShortDesc: string({
        required_error: "Description is required"
      }),
      StartDate: string({
        required_error: "Event Start date is required"
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