import * as service from "../../db/services/announcementType.service";
import { CreateAnnouncementTypeDTO, UpdateAnnouncementTypeDTO } from "../dto/announcementType.dto";
import { announcementTypeAttributes } from "../interfaces";

export const create = async(payload: CreateAnnouncementTypeDTO): Promise<announcementTypeAttributes> => {
    return await service.create(payload);
}

export const update = async (id: number, payload: UpdateAnnouncementTypeDTO): Promise<announcementTypeAttributes> => {
    return await service.update(id, payload);
}

export const getById = async (id: number): Promise<announcementTypeAttributes> => {
    return await service.getById(id);
}

export const getAll = async(): Promise<announcementTypeAttributes[]> => {
    return await service.getAll();
}