import { EventInput, EventOutput } from '../models/event.model';
import * as dal from "../dal/event.dal";

export const create = async (payload: EventInput): Promise<EventOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<EventInput>): Promise<EventOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<EventOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<EventOutput[]> => {
    return dal.getAll();
}