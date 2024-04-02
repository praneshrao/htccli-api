import EventDetails, { EventDetailsInput, EventDetailsOutput } from '../models/eventDetails.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: EventDetailsInput): Promise<EventDetailsOutput> => {
    return await _create(EventDetails, payload);
}

export const update = async (id: number, payload: Partial<EventDetailsInput>): Promise<EventDetailsOutput> => {
    return await _update(id, EventDetails, payload);
}

export const getById = async (id: number): Promise<EventDetailsOutput> => {
    return await _getById<EventDetails>(id, EventDetails)
}

export const getAll = async (): Promise<EventDetailsOutput[]> => {
    return EventDetails.findAll()
}
