import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { sponsorshipTypeAttributes } from '../../api/interfaces/sponsorshipType.interface';

export interface SponsorshipTypeInput extends Optional<sponsorshipTypeAttributes, 'Id'> {}
export interface SponsorshipTypeOutput extends Required<sponsorshipTypeAttributes> {}

class SponsorshipType extends Model<sponsorshipTypeAttributes, SponsorshipTypeInput> implements sponsorshipTypeAttributes {
    public Id!: number
    public SponsorshipType!: string
    public Amount!: number
    public Active!: boolean
}

SponsorshipType.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    SponsorshipType: {
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
    tableName: "EventSponsorshipType",
    hooks: {
        beforeCreate: (async (sponsorshipType: any) => {
        const nextId = await getNextId(SponsorshipType);  
        sponsorshipType.Id = nextId[0].Id+1;
        }),
    }
});

export default SponsorshipType;