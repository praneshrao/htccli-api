import { GalleryInput, GalleryOutput } from '../models/gallery.model';
import * as dal from "../dal/gallery.dal";

export const create = async (payload: GalleryInput): Promise<GalleryOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<GalleryInput>): Promise<GalleryOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<GalleryOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<GalleryOutput[]> => {
    return dal.getAll();
}