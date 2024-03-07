import { SessionInput, SessionOutput} from '../models/session.model';
import * as sessionDAL from '../dal/session.dal';

export const create = async (payload: SessionInput): Promise<SessionOutput> => {
    return sessionDAL.create(payload);
}

export const update = async (id: string, payload: Partial<SessionInput>): Promise<SessionOutput> => {
    return sessionDAL.update(id, payload);
}

export const remove = async (id: string, payload: Partial<SessionInput>): Promise<SessionOutput> => {
    return sessionDAL.update(id, payload);
}
export const getById = async (id: string, valid: boolean): Promise<SessionOutput> => {
    return sessionDAL.getById(id, valid);
}

