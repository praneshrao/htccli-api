import Service, { ServiceInput, ServiceOutput } from '../models/service.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: ServiceInput): Promise<ServiceOutput> => {
    return await _create(Service, payload);
}

export const update = async (id: number, payload: Partial<ServiceInput>): Promise<ServiceOutput> => {
    return await _update(id, Service, payload);
}

export const getById = async (id: number): Promise<ServiceOutput> => {
    return await _getById<Service>(id, Service)
}

export const getAll = async (): Promise<ServiceOutput[]> => {
    return Service.findAll()
}
