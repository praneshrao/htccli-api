import GalleryType, { GalleryTypeInput, GalleryTypeOutput } from '../models/galleryType.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: GalleryTypeInput): Promise<GalleryTypeOutput> => {
    return await _create(GalleryType, payload);
}

export const update = async (id: number, payload: Partial<GalleryTypeInput>): Promise<GalleryTypeOutput> => {
    return await _update(id, GalleryType, payload);
}

export const getById = async (id: number): Promise<GalleryTypeOutput> => {
    return await _getById<GalleryType>(id, GalleryType)
}

export const getAll = async (): Promise<GalleryTypeOutput[]> => {
    return GalleryType.findAll()    
}