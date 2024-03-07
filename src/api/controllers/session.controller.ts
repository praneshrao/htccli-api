import * as service from '../../db/services/session.service';
import { CreateSessionDTO, UpdateSessionDTO } from '../dto/session.dto';
import { ISession } from '../interfaces/session.interface';

export const create = async (payload: CreateSessionDTO): Promise<ISession> => {
    return await service.create(payload);
}

export const update = async (id: string, payload: UpdateSessionDTO): Promise<ISession> => {
    return await service.update(id, payload);
}

export const remove = async (id: string, payload: UpdateSessionDTO): Promise<ISession> => {
    return await service.update(id, payload);
}

export const getById = async (id: string, valid: boolean): Promise<ISession> => {
    return await service.getById(id, valid);
}