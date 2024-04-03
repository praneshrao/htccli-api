import { DayTypeInput, DayTypeOutput } from '../models/dayType.model';
import * as dal from "../dal/dayType.dal";

export const create = async (payload: DayTypeInput): Promise<DayTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<DayTypeInput>): Promise<DayTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<DayTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<DayTypeOutput[]> => {
    return dal.getAll();
}