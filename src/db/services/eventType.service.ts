import { EventTypeInput, EventTypeOutput } from '../models/eventType.model';
import * as dal from "../dal/eventType.dal";

export const create = async (payload: EventTypeInput): Promise<EventTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<EventTypeInput>): Promise<EventTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<EventTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<EventTypeOutput[]> => {
    return dal.getAll();
}