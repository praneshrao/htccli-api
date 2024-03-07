export interface IUser {
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