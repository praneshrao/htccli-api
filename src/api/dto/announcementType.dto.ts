import { Optional } from "sequelize/types"

export type CreateAnnouncementTypeDTO = {
    Id: number
    AnnouncementTypeName: string
    Active: boolean
}

export type UpdateAnnouncementTypeDTO = Optional<CreateAnnouncementTypeDTO, 'Id'>