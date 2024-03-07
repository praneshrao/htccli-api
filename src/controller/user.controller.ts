import { Request, Response } from "express";
import UserModel from "../models/user.model";
import logger from "../utils/logger";
import {
    CreateUserInput,
    UpdateUserInput,
    GetUserInput,
    DeleteUserInput
} from "../schema/user.schema";
import { createUser, findandupdateUser, getUserById, getUsers, findUser, deleteUser, resetPassword } from "../service/user.service";

export async function createUserHandler(
req: Request<{}, {}, CreateUserInput["body"]>, 
res: Response) {
    try {
        //const user = await UserModel.create(req.body);
        const user = await createUser(req, res)
        return res.send(user);
    } catch (err: any) {
        logger.error(err);
        return res.status(409).send(err.message);
    }
}

export async function getUserHandler(
    req: Request, res: Response
) {
    const user = await getUsers()
    if(!user) {
        return res.sendStatus(404);
    }
    return res.send(user);
}

export async function getUserByIdHandler(
    req: Request<GetUserInput["params"]>, 
    res: Response) {
    const userId = req.params.Id;
    const user = await getUserById(userId);
    if (!user) {
        return res.sendStatus(404);       
    }
    return res.send(user);
} 

export async function updateUserHandler(
    req: Request<UpdateUserInput["params"]>, 
    res: Response) {

    const userId = req.params.Id;
    const update = req.body;

    const user = await findUser(userId);

    if (!user) {
        return res.sendStatus(404);
    }

    const updateUser = await findandupdateUser(userId, update);
    if (!updateUser) {
        return res.sendStatus(404);       
    }
    res.json({
        "message": "User Updated"
    });
} 

// Delete user by id
export async function deleteUserHandler(
    req: Request<DeleteUserInput["params"]>, 
    res: Response) {
    const userId = req.params.Id;
    const user = await findUser(userId);

    if (!user) {
        return res.sendStatus(404);
    }

    const deletedUser = await deleteUser(userId);
    if(!deletedUser) {
        return res.sendStatus(404); 
    }
    res.json({
        "message": "User Deleted"
    });
}

export async function resetPasswordHandler(
    req: Request<UpdateUserInput["params"]>, 
    res: Response) {

    const userId = req.params.Id;
    const update = req.body;

    const user = await findUser(userId);

    if (!user) {
        return res.sendStatus(404);
    }

    const updateUser = await resetPassword(userId, update);
    if (!updateUser) {
        return res.sendStatus(404);       
    }
    res.json({
        "message": "Password reset successfully"
    });
} 
