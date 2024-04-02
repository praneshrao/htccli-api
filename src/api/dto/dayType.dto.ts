import { Optional } from "sequelize/types"

export type CreateDayTypeDTO = {
    Id: number
    DayTypeName: string
    Active: boolean
}

export type UpdateDayTypeDTO = Optional<CreateDayTypeDTO, 'Id'>