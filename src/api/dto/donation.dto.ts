import { Optional } from "sequelize/types"

export type CreatedonationDTO = {
    Id: number
    DonationTypeID: number
    DonationName: string
    Description: string
    MinAmount: number
    MaxAmount: number
    PayOnline: boolean
    Active: Boolean
}

export type UpdateDonationDTO = Optional<CreatedonationDTO, 'Id'>