import { Optional } from "sequelize/types"

export type CreateAnnouncementDTO = {
    Id: number
    AnnouncementTypeID: number
    AnnouncementName: string
    ShortDesc: string
    LongDesc: string
    AnnouncementDate: string
    ValidUntilDate: string
    ImageFile: string
    ExternalURL: string
    FlyerName: string
    DisplayOrder: number
    Active: boolean
}

export type UpdateAnnouncementDTO = Optional<CreateAnnouncementDTO, 'Id'>