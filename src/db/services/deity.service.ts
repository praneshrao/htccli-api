import { DeityInput, DeityOutput } from '../models/deity.model';
import * as deityDAL from "../dal/deity.dal";

export const create = async (payload: DeityInput): Promise<DeityOutput> => {
    return deityDAL.create(payload)
}

export const update = async (id: number, payload: Partial<DeityInput>): Promise<DeityOutput> => {
    return deityDAL.update(id, payload);
}

export const getById = async (id: number): Promise<DeityOutput> => {
    return deityDAL.getById(id);
}

export const getAll = async (): Promise<DeityOutput[]> => {
    return deityDAL.getAll();
}