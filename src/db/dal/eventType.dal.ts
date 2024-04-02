import EventType, { EventTypeInput, EventTypeOutput } from '../models/eventType.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: EventTypeInput): Promise<EventTypeOutput> => {
    return await _create(EventType, payload);
}

export const update = async (id: number, payload: Partial<EventTypeInput>): Promise<EventTypeOutput> => {
    return await _update(id, EventType, payload);
}

export const getById = async (id: number): Promise<EventTypeOutput> => {
    return await _getById<EventType>(id, EventType)
}

export const getAll = async (): Promise<EventTypeOutput[]> => {
    return EventType.findAll()    
}