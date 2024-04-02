import { Optional } from "sequelize/types"

export type CreateDonationTypeDTO = {
    Id: number
    DonationTypeName: string
    Active: boolean
}

export type UpdateDonationTypeDTO = Optional<CreateDonationTypeDTO, 'Id'>