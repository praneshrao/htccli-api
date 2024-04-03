import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { donationTypeAttributes } from '../../api/interfaces/donationType.interface';

export interface DonationTypeInput extends Optional<donationTypeAttributes, 'Id'> {}
export interface DonationTypeOutput extends Required<donationTypeAttributes> {}

class DonationType extends Model<donationTypeAttributes, DonationTypeInput> implements donationTypeAttributes {
    public Id!: number
    public DonationTypeName!: string
    public Active!: boolean
}

DonationType.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DonationTypeName: {
        type: DataTypes.STRING,
        allowNull: false
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
    tableName: "DonationTypes",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(DonationType);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default DonationType;