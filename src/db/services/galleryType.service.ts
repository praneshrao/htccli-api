import { GalleryTypeInput, GalleryTypeOutput } from '../models/galleryType.model';
import * as dal from "../dal/galleryType.dal";

export const create = async (payload: GalleryTypeInput): Promise<GalleryTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<GalleryTypeInput>): Promise<GalleryTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<GalleryTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<GalleryTypeOutput[]> => {
    return dal.getAll();
}