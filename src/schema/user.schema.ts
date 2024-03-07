import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
      UserName: string({
        required_error: "UserName is required",
      }),
      PasswordHash: string({
        required_error: "Password is required",
      }).min(8, "Password too short - should be 8 chars minimum"),
      Email: string({
        required_error: "Email is required",
      }).email("Not a valid email"),
    })
  }

  const params = {
    params: object({
      Id: string({
        required_error: "Id is required",
      }),
    }),
  };

  export const createUserSchema = object({
    ...payload
  });

  export const updateUserSchema = object({
    ...payload,
    ...params
  })

  export const getUsersSchema = object({
    
  })

  export const getUserSchema = object({
    ...params
  })

  export const deleteUserSchema = object({
    ...params
  })

  export type CreateUserInput = TypeOf<typeof createUserSchema>;
  export type UpdateUserInput = TypeOf<typeof updateUserSchema>;
  export type DeleteUserInput = TypeOf<typeof deleteUserSchema>;
  export type GetUserInput = TypeOf<typeof getUserSchema>;
  
  