import { Optional } from "sequelize/types"

export type CreateDeityDTO = {
    Id: number
    DeityName: string
    DeityImageFile: string
    Active: boolean
}

export type UpdateDeityDTO = Optional<CreateDeityDTO, 'Id'>