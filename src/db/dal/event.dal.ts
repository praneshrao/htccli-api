import Event, { EventInput, EventOutput } from '../models/event.model'
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';
import EventType from '../models/eventType.model';

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
    const result = await Event.findAll({
        include: [{
            model: EventType,
            required: true
        }],
        order: [
            ['Id', 'DESC']
        ]
    });
    return result;
}

export const getCount = async () => {
    const count = await Event.count();
return count;
}
