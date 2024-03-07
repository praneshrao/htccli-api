import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    Id: string
    Email: string
    EmailConfirmed: string
    PasswordHash: string
    SecurityStamp: string
    PhoneNumber: string
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEndDateUtc: string
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserName: string
    createdAt: string
    updatedAt: string
}

export type UpdateUserDTO = Optional<CreateUserDTO, "Id">