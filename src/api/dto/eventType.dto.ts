import { Optional } from "sequelize/types"

export type CreateEventTypeDTO = {
    Id: number
    EventTypeName: string
    Active: boolean
}

export type UpdateEventTypeDTO = Optional<CreateEventTypeDTO, 'Id'>