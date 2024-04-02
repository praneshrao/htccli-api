import { Optional } from "sequelize/types"

export type CreateTimingsDTO = {
    Id: number
    DayTypeId: number
    DayName: string
    Duration: string
    Active: boolean
}

export type UpdateTimingsTypeDTO = Optional<CreateTimingsDTO, 'Id'>