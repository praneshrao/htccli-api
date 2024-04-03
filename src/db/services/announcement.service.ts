import { AnnouncementInput, AnnouncementOutput } from '../models/announcement.model';
import * as dal from "../dal/announcement.dal";

export const create = async (payload: AnnouncementInput): Promise<AnnouncementOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<AnnouncementInput>): Promise<AnnouncementOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<AnnouncementOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<AnnouncementOutput[]> => {
    return dal.getAll();
}