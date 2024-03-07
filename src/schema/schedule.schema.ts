import { boolean, object, string, TypeOf } from "zod";

const payload = {
    body: object({
      Name: string({
        required_error: "Schedule Name is required",
      }),
      Time: string({
        required_error: "Time is required",
      }),
      Active: boolean({
        required_error: "Status is required",
      })
    })
  };

  const params = {
    params: object({
      Id: string({
        required_error: "Id is required",
      }),
    }),
  };


  export const createScheduleSchema = object({
    ...payload
  });

  export const updateScheduleSchema = object({
    ...payload,
    ...params
  })

  export type CreateScheduleInput = TypeOf<typeof createScheduleSchema>;
  export type UpdateScheduleInput = TypeOf<typeof updateScheduleSchema>;