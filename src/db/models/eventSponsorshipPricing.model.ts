import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { eventSponsorshipAttributes } from '../../api/interfaces/eventSponsorshipPricing.interface';
import SponsorshipType from './sponsorshipType.model';

export interface EventSponsorshipInput extends Optional<eventSponsorshipAttributes, 'Id'> {}
export interface EventSponsorshipOutput extends Required<eventSponsorshipAttributes> {}

class EventSponsorship extends Model<eventSponsorshipAttributes, EventSponsorshipInput> implements eventSponsorshipAttributes {
    public Id!: number
    public EventId!: number
    public SponsorshipTypeId!: number
    public Description!: string;
    public Amount!: number
    public Active!: boolean
}

EventSponsorship.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EventId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    SponsorshipTypeId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Amount: {
        type: DataTypes.DOUBLE,
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
    tableName: "EventSponsorshipPricing",
    hooks: {
        beforeCreate: (async (eventSponsorship: any) => {
        const nextId = await getNextId(EventSponsorship);  
        eventSponsorship.Id = nextId[0].Id+1;
        }),
    }
});

EventSponsorship.belongsTo(SponsorshipType, { foreignKey: "SponsorshipTypeId"})

export default EventSponsorship;