import { Optional } from "sequelize/types"

export type CreateFeeFrequencyDTO = {
    Id: number
    Frequency: string
    Active: boolean
}

export type UpdateFeeFrequencyDTO = Optional<CreateFeeFrequencyDTO, 'Id'>