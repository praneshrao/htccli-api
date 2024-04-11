import { Optional } from "sequelize/types"

export type CreateServicestDTO = {
    Id: number
    ServiceTypeId: number
    ServiceName: string
    Description: string
    ServicePrice: number
    PayOnline: boolean
    Active: boolean
}

export type UpdateServicesDTO = Optional<CreateServicestDTO, 'Id'>