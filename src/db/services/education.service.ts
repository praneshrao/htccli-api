import { EducationInput, EducationOutput } from '../models/education.model';
import * as dal from "../dal/education.dal";

export const create = async (payload: EducationInput): Promise<EducationOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<EducationInput>): Promise<EducationOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<EducationOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<EducationOutput[]> => {
    return dal.getAll();
}

export const getCount = async () => {
    return await dal.getCount();
}