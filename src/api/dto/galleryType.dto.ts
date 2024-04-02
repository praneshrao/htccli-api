import { Optional } from "sequelize/types"

export type CreateGalleryTypeDTO = {
    Id: number
    GalleryTypeName: string
    Active: boolean
}

export type UpdateGalleryTypeDTO = Optional<CreateGalleryTypeDTO, 'Id'>