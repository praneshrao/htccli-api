import { Optional } from "sequelize/types"

export type CreateSponsorshipTypeDTO = {
    Id: number
    SponsorshipType: string
    Amount: number
    Active: boolean
}

export type UpdateSponsorshipTypeDTO = Optional<CreateSponsorshipTypeDTO, 'Id'>