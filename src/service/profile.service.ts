import { Request, Response } from "express";
import logger from "../utils/logger";
import ProfileModel from "../models/profile.model";
import db from "../utils/connect";
import { col, fn } from "sequelize";

// Get Temple Profile By Id
export const getProfileById = async (id: string) => {
    try {
        const profile = await ProfileModel.findAll({
            where: {
                Id: id
            }
        });
        return profile;
    } catch (err: any) {
        logger.error("Profile not found", err)
        throw new Error(err);
    }
}

// Create a new Prifle
export async function createProfile(req: Request, res: Response) {
    const t = await db.transaction();
    try {
        const profile = await ProfileModel.create(req.body);
        await t.commit();
        return profile;
    } catch(err: any) {
        await t.rollback();
        logger.error(err);
        return null;
    }
}

// Update profile by id
export async function updateProfile(profileId: any, update: any) {
    try {
       return await ProfileModel.findByPk(profileId).then((profile: any) => {
        profile.Id = update.Id,
        profile.TempleName = update.TempleName,
        profile.TempleShortName = update.TempleShortName,
        profile.TempleLogo = update.TempleLogo,
        profile.TempleBanner = update.TempleBanner,
        profile.TempleDescription = update.TempleDescription,
        profile.Address1 = update.Address1,
        profile.City = update.City,
        profile.State = update.State,
        profile.ZipCode = update.Zipcode,
        profile.PhoneNumber = update.PhoneNumber,
        profile.EmailAddress = update.EmailAddress,
        profile.TaxID = update.TaxID,
        profile.WebsiteURL = update.WebsiteURL,
        profile.Latitude = update.Latitude,
        profile.Longitude = update.Longitude,
        profile.PluseCode = update.PluseCode
        return profile.save();
       });
    } catch(err: any) {
        logger.error(err);
        throw new Error(err);
    }
}

export async function getNextId() {
    const nextId = await ProfileModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    })
    return nextId;
}



