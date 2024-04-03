import { AnnouncementTypeInput, AnnouncementTypeOutput } from '../models/announcementType.model';
import * as dal from "../dal/announcementType.dal";

export const create = async (payload: AnnouncementTypeInput): Promise<AnnouncementTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<AnnouncementTypeInput>): Promise<AnnouncementTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<AnnouncementTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<AnnouncementTypeOutput[]> => {
    return dal.getAll();
}