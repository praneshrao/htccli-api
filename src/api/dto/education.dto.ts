import { Optional } from "sequelize/types"

export type CreateEducationDTO = {
    Id: number
    FeesFrequencyID: number
    EducationTypeID: number
    ProgramName: string
    Description: string
    DayTime: string
    ValidUntilDate: string
    ImageFile: string
    Fees: number
    Register: boolean
    Active: boolean
}

export type UpdateEducationDTO = Optional<CreateEducationDTO, 'Id'>