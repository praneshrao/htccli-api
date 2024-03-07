import { Request, Response } from "express";
import UserModel from "../models/user.model";
import logger from "../utils/logger";
import UserInput from "../models/user.model";
import bcrypt from "bcrypt";
import { omit } from "lodash";
import db from "../../config/database";
import { Identifier } from "sequelize";
import dayjs from "dayjs";

// Get all Users
export async function getUsers() {
    try {
        const users = await UserModel.findAll();
        return omit(users,"PasswordHash");
    } catch(err: any) {
        logger.error("Users not found", err)
        throw new Error(err);
    }
}

// Get user by id
export const getUserById = async (id: string) => {
    try {
        const user = await UserModel.findAll({
            where: {
                Id: id
            }
        });
        return omit(user,"PasswordHash");
    } catch (err: any) {
        logger.error("User not found", err)
        throw new Error(err);
    }
}

// Create a new user
export async function createUser(req: Request, res: Response) {
    const t = await db.transaction();
    try {
        const user = await UserModel.create(req.body);
        await t.commit();
        return omit(user.toJSON(),"PasswordHash")
    } catch(err: any) {
        await t.rollback();
        logger.error(err);
        return null;
        //throw new Error(err);
    }
}

// Update user by id
export async function findandupdateUser(userId: any, update: any) {
    const updatedDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    try {
       return await UserModel.findByPk(userId).then((user) => {
            user.Email = update.Email,
            user.EmailConfirmed = update.EmailConfirmed,
            user.PasswordHash = update.PasswordHash,
            user.SecurityStamp = update.SecurityStamp,
            user.PhoneNumber = update.PhoneNumber,
            user.PhoneConfirmed = update.PhoneConfirmed,
            user.TwoFactorEnabled = update.TwoFactorEnabled,
            user.LockoutEndDateUtc = update.LockoutEndDateUtc,
            user.LockoutEnabled = update.LockoutEnabled,
            user.AccessFailedCount = update.AccessFailedCount,
            user.UserName = update.UserName,
            user.updatedAt = updatedDate
            return user.save();
       });
    } catch(err: any) {
        logger.error(err);
        throw new Error(err);
    }
}
 
// Delete user by id
export async function deleteUser(userId: any) {
    const deleteDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    try {
        return await UserModel.findByPk(userId).then((user) => {
            user.LockoutEnabled = true,  // For now locking out the user
            user.updatedAt = deleteDate
            return user.save();
        });
    } catch (err: any) {
        logger.error('User not Deleted');
       throw new Error(err);
    }
}

// Reset Password 
export async function resetPassword(userId: any, update: any) {
    const updatedDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    try {
       return await UserModel.findByPk(userId).then((user) => {
            user.Email = update.Email,
            user.PasswordHash = update.PasswordHash,
            user.UserName = update.UserName,
            user.updatedAt = updatedDate
            return user.save();
       });
    } catch(err: any) {
        logger.error(err);
        throw new Error(err);
    }
}

// Validate Password
export async function validatePassword({email, password}:{email: string, password: string}) {
    const user = await UserModel.findOne({ where: { Email: email } });

    if (user === null) {
        return false;
    }

    if (await bcrypt.compare(password, user.PasswordHash)) {
        return user.toJSON();
    }
    return null;
}

export async function findUser(Id: string) {

    const user = await UserModel.findAll({
        where: {
            Id: Id
        },
        raw: true  // Not to return the as dataValues
    });
    return user;
}
