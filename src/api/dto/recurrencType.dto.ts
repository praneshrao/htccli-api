import { Optional } from "sequelize/types"

export type CreateRecurrenceTypeDTO = {
    Id: number
    RecurrenceName: string
    Active: boolean
}

export type UpdateRecurrenceTypeDTO = Optional<CreateRecurrenceTypeDTO, 'Id'>