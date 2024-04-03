import { ServiceInput, ServiceOutput } from '../models/service.model';
import * as dal from "../dal/service.dal";

export const create = async (payload: ServiceInput): Promise<ServiceOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<ServiceInput>): Promise<ServiceOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<ServiceOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<ServiceOutput[]> => {
    return dal.getAll();
}