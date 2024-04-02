import { Optional } from "sequelize/types"

export type CreateEducationTypeDTO = {
    Id: number
    EducationTypeName: string
    Active: boolean
}

export type UpdateEducationTypeDTO = Optional<CreateEducationTypeDTO, 'Id'>