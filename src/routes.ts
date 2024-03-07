import { Express, Request, Response } from "express";
import {
/*     getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser */
    createUserHandler, deleteUserHandler, getUserByIdHandler, getUserHandler, resetPasswordHandler, updateUserHandler
} from "./controller/user.controller";
import {
    createUserSchema, deleteUserSchema, getUserSchema, getUsersSchema, updateUserSchema
} from "./schema/user.schema";
import ValidateResource from "./middleware/validateResource";
import requiredUser from "./middleware/requireUser";
import { createSessionSchema } from "./schema/session.schema";
import { createUserSessionHandler, deleteUserSessionHandler, getUserSessionsHandler } from "./controller/session.controller";
import validateResource from "./middleware/validateResource";
import { createProfileSchema, updateProfileSchema } from "./schema/profile.schema";
import { createProfileHandler, updateProfileHandler } from "./controller/profile.controller";
import { createScheduleSchema, updateScheduleSchema } from "./schema/schedule.schema";
import { createScheduleHandler, updateScheduleHandler } from "./controller/schedule.controller";

function routes(app: Express) {
    /**
    * @swagger
    * /:
    *  get:
    *    description: Checks the health of the API
    *    responses:
    *      '200':
    *        description: A successful response
    */
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

/*     app.get("/api/users",getUsers);
    app.get("/api/user/:id", getUserById);
    app.post("/api/user", createUser);
    app.put("/api/user/:id", updateUser);
    app.delete("/api/user/:id", deleteUser); */

    /**
    * @swagger
    * /users:
    *  post:
    *    description: Register the user
    *    responses:
    *      '200':
    *        description: User created successfully
    */
    app.post("/api/register", validateResource(createUserSchema), createUserHandler);

    /**
    * @swagger
    * /users:
    *  get:
    *    description: Get all the users
    *    responses:
    *      '200':
    *        description: Return list of users
    */
    app.get("/api/users", validateResource(getUsersSchema), getUserHandler );
 
    app.get("/api/user/:Id", validateResource(getUsersSchema), getUserByIdHandler);

    app.post("/api/user/:Id", validateResource(updateUserSchema), updateUserHandler);

    app.delete("/api/user/:Id", validateResource(deleteUserSchema), deleteUserHandler)

    app.post("/api/passwordReset/:Id", validateResource(updateUserSchema), resetPasswordHandler);

    app.post("/api/sessions", createUserSessionHandler);

    app.get("/api/sessions",  getUserSessionsHandler);

    app.delete("/api/sessions", deleteUserSessionHandler);

    app.post("/api/profile", validateResource(createProfileSchema), createProfileHandler)

    app.post("/api/profile/:Id", validateResource(updateProfileSchema), updateProfileHandler);

    app.post("/api/schedule", validateResource(createScheduleSchema), createScheduleHandler);

    app.post("/api/schedule/:Id", validateResource(updateScheduleSchema), updateScheduleHandler);

}

export default routes;