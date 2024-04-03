import Timing, { TimingInput, TimingOutput } from '../models/timing.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: TimingInput): Promise<TimingOutput> => {
    return await _create(Timing, payload);
}

export const update = async (id: number, payload: Partial<TimingInput>): Promise<TimingOutput> => {
    return await _update(id, Timing, payload);
}

export const getById = async (id: number): Promise<TimingOutput> => {
    return await _getById<Timing>(id, Timing)
}

export const getAll = async (): Promise<TimingOutput[]> => {
    return Timing.findAll()
}
