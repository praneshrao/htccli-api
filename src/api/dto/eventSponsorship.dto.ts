import { Optional } from "sequelize/types"

export type CreateEventSponsorshipDTO = {
    Id: number
    EventId: number
    SponsorshipTypeId: number
    Description: string
    Amount: number
    Active: boolean
}

export type UpdateEventSponsorshipDTO = Optional<CreateEventSponsorshipDTO, 'Id'>