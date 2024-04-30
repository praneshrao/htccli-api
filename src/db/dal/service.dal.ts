import Service, { ServiceInput, ServiceOutput } from '../models/service.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';
import ServiceType from '../models/serviceType.model';

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
    const result = await Service.findAll({
        include: [{
            model: ServiceType,
            required: true
        }],
        order: [
            ['Id', 'DESC']
        ]
    });
    return result;
}

export const getCount = async () => {
    const count = await Service.count();
return count;
}
