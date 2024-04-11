import { Optional } from "sequelize/types"

export type CreateGalleryDTO = {
    Id: number
    GalleryTypeId: number
    Title: string
    Description: string
    Thumbnail: string
    ImageFile: string
    ImageURL: string
    AlbumURL: string
    Active: boolean
}

export type UpdateGalleryDTO = Optional<CreateGalleryDTO, 'Id'>