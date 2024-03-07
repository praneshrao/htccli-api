import { Optional } from "sequelize/types"

export type CreateScheduleDTO = {
    Id: number
    Name: string
    Time: string
    Active: boolean
}

export type UpdateScheduleDTO = Optional<CreateScheduleDTO, "Id">