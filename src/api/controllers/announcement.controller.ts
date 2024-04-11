import * as service from "../../db/services/announcement.service";
import { CreateAnnouncementDTO, UpdateAnnouncementDTO } from "../dto/announcement.dto";
import { announcementAttributes } from "../interfaces";

export const create = async(payload: CreateAnnouncementDTO): Promise<announcementAttributes> => {
    return await service.create(payload);
}

export const update = async (id: number, payload: UpdateAnnouncementDTO): Promise<announcementAttributes> => {
    return await service.update(id, payload);
}

export const getById = async (id: number): Promise<announcementAttributes> => {
    return await service.getById(id);
}

export const getAll = async(): Promise<announcementAttributes[]> => {
    return await service.getAll();
}