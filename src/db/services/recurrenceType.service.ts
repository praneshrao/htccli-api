import { RecurrenceTypeInput, RecurrenceTypeOutput } from '../models/recurrenceType.model';
import * as dal from "../dal/recurrenceType.dal";

export const create = async (payload: RecurrenceTypeInput): Promise<RecurrenceTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<RecurrenceTypeInput>): Promise<RecurrenceTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<RecurrenceTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<RecurrenceTypeOutput[]> => {
    return dal.getAll();
}