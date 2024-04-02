import Event, { EventInput, EventOutput } from '../models/event.model'
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: EventInput): Promise<EventOutput> => {
    return await _create(Event, payload);
}

export const update = async (id: number, payload: Partial<EventInput>): Promise<EventOutput> => {
    return await _update(id, Event, payload);
}

export const getById = async (id: number): Promise<EventOutput> => {
    return await _getById<Event>(id, Event)
}

export const getAll = async (): Promise<EventOutput[]> => {
    return Event.findAll()
}
