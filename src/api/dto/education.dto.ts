import { Optional } from "sequelize/types"

export type CreateEducationDTO = {
    Id: number
    FeeFrequencyId: number
    EducationTypeID: number
    EducationName: string
    Description: string
    DayTime: string
    ValidUntilDate: string
    ImageFile: string
    Fees: number
    Register: boolean
    Active: boolean
}

export type UpdateEducationDTO = Optional<CreateEducationDTO, 'Id'>