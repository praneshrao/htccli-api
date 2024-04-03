import { ServiceTypeInput, ServiceTypeOutput } from '../models/serviceType.model';
import * as dal from "../dal/serviceType.dal";

export const create = async (payload: ServiceTypeInput): Promise<ServiceTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<ServiceTypeInput>): Promise<ServiceTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<ServiceTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<ServiceTypeOutput[]> => {
    return dal.getAll();
}