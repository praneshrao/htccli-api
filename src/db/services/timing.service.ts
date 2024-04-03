import { TimingInput, TimingOutput } from '../models/timing.model';
import * as dal from "../dal/timing.dal";

export const create = async (payload: TimingInput): Promise<TimingOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<TimingInput>): Promise<TimingOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<TimingOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<TimingOutput[]> => {
    return dal.getAll();
}