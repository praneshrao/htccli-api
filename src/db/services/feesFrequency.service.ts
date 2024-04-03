import { FeeFrequencyInput, FeeFrequencyeOutput } from '../models/feesFrequency.model';
import * as dal from "../dal/feesFrequency.dal";

export const create = async (payload: FeeFrequencyInput): Promise<FeeFrequencyeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<FeeFrequencyInput>): Promise<FeeFrequencyeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<FeeFrequencyeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<FeeFrequencyeOutput[]> => {
    return dal.getAll();
}