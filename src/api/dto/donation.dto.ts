import { Optional } from "sequelize/types"

export type CreatedonationDTO = {
    Id: number
    DonationTypeId: number
    DonationName: string
    Description: string
    MinAmount: number
    MaxAmount: number
    PayOnline: boolean
    Active: boolean
}

export type UpdateDonationDTO = Optional<CreatedonationDTO, 'Id'>