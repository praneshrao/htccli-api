/* import { Express, Request, Response } from "express";
import {
    createUserSchema, deleteUserSchema, getUserSchema, getUsersSchema, updateUserSchema
} from "./schema/user.schema";
import ValidateResource from "./middleware/validateResource";
import requiredUser from "./middleware/requireUser";
import { createSessionSchema } from "./schema/session.schema";
import validateResource from "./middleware/validateResource";
import { createProfileSchema, updateProfileSchema } from "./schema/profile.schema";
import { createScheduleSchema, updateScheduleSchema } from "./schema/schedule.schema";

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
    //app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

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
    //app.post("/api/register", validateResource(createUserSchema), createUserHandler);

    /**
    * @swagger
    * /users:
    *  get:
    *    description: Get all the users
    *    responses:
    *      '200':
    *        description: Return list of users
    */


//}

//export default routes; */