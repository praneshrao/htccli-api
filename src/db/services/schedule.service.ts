import { ScheduleInput, ScheduleOutput } from '../models/schedule.model'
import * as scheduleDAL from "../dal/schedule.dal";

export const create = async (payload: ScheduleInput): Promise<ScheduleOutput> => {
    return scheduleDAL.create(payload)
}

export const update = async (id: number, payload: Partial<ScheduleInput>): Promise<ScheduleOutput> => {
    return scheduleDAL.update(id, payload);
}

export const getById = async (id: number): Promise<ScheduleOutput> => {
    return scheduleDAL.getById(id);
}

export const getAll = async (): Promise<ScheduleOutput[]> => {
    return scheduleDAL.getAll();
}