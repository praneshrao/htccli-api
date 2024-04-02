import AnnouncementType, { AnnouncementTypeInput, AnnouncementTypeOutput } from '../models/announcementType.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: AnnouncementTypeInput): Promise<AnnouncementTypeOutput> => {
    return await _create(AnnouncementType, payload);
}

export const update = async (id: number, payload: Partial<AnnouncementTypeInput>): Promise<AnnouncementTypeOutput> => {
    return await _update(id, AnnouncementType, payload);
}

export const getById = async (id: number): Promise<AnnouncementTypeOutput> => {
    return await _getById<AnnouncementType>(id, AnnouncementType)
}

export const getAll = async (): Promise<AnnouncementTypeOutput[]> => {
    return AnnouncementType.findAll()
}