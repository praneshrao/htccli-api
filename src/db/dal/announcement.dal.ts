import Announcement, { AnnouncementInput, AnnouncementOutput} from '../models/announcement.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: AnnouncementInput): Promise<AnnouncementOutput> => {
    return await _create(Announcement, payload);
}

export const update = async (id: number, payload: Partial<AnnouncementInput>): Promise<AnnouncementOutput> => {
    return await _update(id, Announcement, payload);
}

export const getById = async (id: number): Promise<AnnouncementOutput> => {
    return await _getById<Announcement>(id, Announcement)
}

export const getAll = async (): Promise<AnnouncementOutput[]> => {
    return await _getAll<Announcement>(Announcement)
}
