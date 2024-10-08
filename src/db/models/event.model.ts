import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { eventAttributes } from '../../api/interfaces/event.interface';
import { eventTypeAttributes } from '../../api/interfaces';
import EventType from './eventType.model';

export interface EventInput extends Optional<eventAttributes, 'Id'> {}
export interface EventOutput extends Required<eventAttributes> {}

class Event extends Model<eventAttributes, EventInput> implements eventAttributes {
    public Id!: number
    public EventTypeId!: number
    public EventName!: string
    public ShortDesc!: string
    public LongDesc!: string
    public StartDate!: string
    public EndDate!: string
    public Duration!: string
    public FlyerLink!: string
    public RequireSponsorship!: boolean
    public Featured!: boolean
    public Readmore!: boolean
    public ExternalURL!: string
    public RecurrenceTypeId!: number
    public ImageFile!: string
    public Active!: boolean
    public EventType!: eventTypeAttributes
}

Event.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EventTypeID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EventName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ShortDesc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LongDesc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StartDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    EndDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Duration: {
        type: DataTypes.STRING,
        allowNull: true
    },
    FlyerLink: {
        type: DataTypes.STRING,
        allowNull: true
    },
    RequireSponsorship: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Readmore: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    ExternalURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    RecurrenceTypeID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    ImageFile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize: db,
    freezeTableName: true, 
    timestamps: false,
    tableName: "Events",
    hooks: {
        beforeCreate: (async (event: any) => {
        const nextId = await getNextId(Event);  
        event.Id = nextId[0].Id+1;
        }),
    }
});

Event.belongsTo(EventType, { foreignKey: "EventTypeId"})

export default Event;