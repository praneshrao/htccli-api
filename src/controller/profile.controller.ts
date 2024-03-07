import { Request, Response } from "express";
import logger from "../utils/logger";
import { CreateProfileInput, UpdateProfileInput } from "../schema/profile.schema";
import { createProfile, getProfileById, updateProfile } from "../service/profile.service";

// Create Temple Profile
export async function createProfileHandler(
req: Request<{}, {}, CreateProfileInput["body"]>, 
res: Response) {
    try {
        const profile = await createProfile(req, res)
        return res.json({
            "message": "Profile created"
        });
    } catch (err: any) {
        logger.error(err);
        return res.status(409).send(err.message);
    }
}

export async function updateProfileHandler(
    req: Request<UpdateProfileInput["params"]>, 
    res: Response) {

    const profileId = req.params.Id;
    const update = req.body;

    const result = await getProfileById(profileId);

    if (!result) {
        return res.sendStatus(404);
    }

    const updatedProfile = await updateProfile(profileId, update);
    if (!updatedProfile) {
        return res.sendStatus(404);       
    }
    res.json({
        "message": "Profile Updated"
    });
} 
