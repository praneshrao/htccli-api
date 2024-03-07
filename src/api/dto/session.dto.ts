import { Optional } from "sequelize/types"

export type CreateSessionDTO = {
    Id: string
    UserId: string
    UserAgent: string
    Valid: boolean
    createdAt: string
    updatedAt: string
}

export type UpdateSessionDTO = Optional<CreateSessionDTO, 'Id' | 'UserId' | 'UserAgent' | 'createdAt'>

export type DeleteSessionDTO = Optional<CreateSessionDTO, 'UserId' | 'UserAgent' | 'createdAt'>