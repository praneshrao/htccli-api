import { EducationTypeInput, EducationTypeOutput } from '../models/educationType.model';
import * as dal from "../dal/educationType.dal";

export const create = async (payload: EducationTypeInput): Promise<EducationTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<EducationTypeInput>): Promise<EducationTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<EducationTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<EducationTypeOutput[]> => {
    return dal.getAll();
}