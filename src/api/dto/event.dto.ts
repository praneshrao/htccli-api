import { Optional } from "sequelize/types"

export type CreateEventDTO = {
    Id: number
    EventTypeID: number
    EventName: string
    ShortDesc: string
    LongDesc: string
    StartDate: string
    EndDate: string
    Duration: string
    FlyerLink: string
    RequireSponsorship: boolean
    Readmore: boolean
    ExternalURL: string
    RecurrenceTypeId: number
    ImageFile: string
    Active: boolean
}

export type UpdateEventDTO = Optional<CreateEventDTO, 'Id'>