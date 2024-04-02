import { Request, Response } from "express";
import logger from "../utils/logger";
import scheduleModel from "../models/schedule.model";
import db from "../utils/connect";
import { col, fn } from "sequelize";

// Get Schedule By Id
export const getScheduleById = async (id: string) => {
    try {
        const schedule = await scheduleModel.findAll({
            where: {
                Id: id
            }
        });
        return schedule;
    } catch (err: any) {
        logger.error("Schedule not found", err)
    }
}

// Create a new Schedule
export async function createSchedule(req: Request, res: Response) {
    const t = await db.transaction();
    try {
        const schedule = await scheduleModel.create(req.body);
        await t.commit();
        return schedule;
    } catch(err: any) {
        await t.rollback();
        logger.error("Schedule not created");
        return null;
    }
}

// Update schedule by id
export async function updateSchedule(Id: any, update: any) {
    try {
       return await scheduleModel.findByPk(Id).then((schedule: any) => {
        schedule.Id = update.Id,
        schedule.Name = update.Name,
        schedule.Time = update.Time,
        schedule.Active = update.Active
        return schedule.save();
       });
    } catch(err: any) {
        logger.error("Schedule not updated");
    }
}

export async function getNextId() {
    const nextId = await scheduleModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    })
    return nextId;
}
