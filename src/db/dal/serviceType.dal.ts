import ServiceType, { ServiceTypeInput, ServiceTypeOutput } from '../models/serviceType.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: ServiceTypeInput): Promise<ServiceTypeOutput> => {
    return await _create(ServiceType, payload);
}

export const update = async (id: number, payload: Partial<ServiceTypeInput>): Promise<ServiceTypeOutput> => {
    return await _update(id, ServiceType, payload);
}

export const getById = async (id: number): Promise<ServiceTypeOutput> => {
    return await _getById<ServiceType>(id, ServiceType)
}

export const getAll = async (): Promise<ServiceTypeOutput[]> => {
    return ServiceType.findAll()    
}