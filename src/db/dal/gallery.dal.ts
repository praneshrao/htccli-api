import Gallery, { GalleryInput, GalleryOutput } from '../models/gallery.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: GalleryInput): Promise<GalleryOutput> => {
    return await _create(Gallery, payload);
}

export const update = async (id: number, payload: Partial<GalleryInput>): Promise<GalleryOutput> => {
    return await _update(id, Gallery, payload);
}

export const getById = async (id: number): Promise<GalleryOutput> => {
    return await _getById<Gallery>(id, Gallery)
}

export const getAll = async (): Promise<GalleryOutput[]> => {
    return Gallery.findAll()
}
