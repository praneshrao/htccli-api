import { Optional } from "sequelize/types"

export type CreateServiceTypeDTO = {
    Id: number
    ServiceTypeName: string
    Active: boolean
}

export type UpdateServiceTypeDTO = Optional<CreateServiceTypeDTO, 'Id'>