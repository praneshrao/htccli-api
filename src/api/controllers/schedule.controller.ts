import * as service from "../../db/services/schedule.service";
import { CreateScheduleDTO, UpdateScheduleDTO } from "../dto/schedule.dto";
import { ISchedule } from "../interfaces";

export const create = async(payload: CreateScheduleDTO): Promise<ISchedule> => {
    return await service.create(payload);
}

export const update = async (id: number, payload: UpdateScheduleDTO): Promise<ISchedule> => {
    return await service.update(id, payload);
}

export const getById = async (id: number): Promise<ISchedule> => {
    return await service.getById(id);
}

export const getAll = async(): Promise<ISchedule[]> => {
    return await service.getAll();
}