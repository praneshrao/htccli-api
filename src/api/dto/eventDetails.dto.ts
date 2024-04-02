import { Optional } from "sequelize/types"

export type CreateEventDetailsDTO = {
    Id: number
    EventID: number
    Description: string
    ShortDesc: string
    LongDesc: string
    StartDate: string
    EndDate: string
    Active: boolean
}

export type UpdateEventDetailsDTO = Optional<CreateEventDetailsDTO, 'Id'>