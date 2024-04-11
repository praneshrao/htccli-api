import { eventTypeAttributes } from "./eventType.interface"

export interface eventAttributes {
    Id: number
    EventTypeId: number
    EventName: string
    ShortDesc: string
    LongDesc: string
    StartDate: string
    EndDate: string
    Duration: string
    FlyerLink: string
    RequireSponsorship: boolean
    Featured: boolean
    Readmore: boolean
    ExternalURL: string
    RecurrenceTypeId: number
    ImageFile: string
    Active: boolean
    EventType: eventTypeAttributes
}