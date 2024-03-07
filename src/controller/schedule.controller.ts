import { Request, Response } from "express";
import logger from "../utils/logger";
import { CreateScheduleInput, UpdateScheduleInput } from "../schema/schedule.schema";
import { createSchedule, getScheduleById, updateSchedule } from "../service/schedule.service";

// Create Daily Schedules
export async function createScheduleHandler(
req: Request<{}, {}, CreateScheduleInput["body"]>, 
res: Response) {
    try {
        const result = await createSchedule(req, res)
        return res.send(result);
    } catch (err: any) {
        logger.error(err);
        return res.status(409).send(err.message);
    }
}

export async function updateScheduleHandler(
    req: Request<UpdateScheduleInput["params"]>, 
    res: Response) {

    const Id = req.params.Id;
    const update = req.body;

    const result = await getScheduleById(Id);

    if (!result) {
        return res.sendStatus(404);
    }

    const data = await updateSchedule(Id, update);
    if (!data) {
        return res.sendStatus(404);       
    }
    res.json({
        "message": "Profile Updated"
    });
} 
