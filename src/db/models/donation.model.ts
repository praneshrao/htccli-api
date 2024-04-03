import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { donationAttributes } from '../../api/interfaces/donation.interface';

export interface DonationInput extends Optional<donationAttributes, 'Id'> {}
export interface DonationOutput extends Required<donationAttributes> {}

class Donation extends Model<donationAttributes, DonationInput> implements donationAttributes {
    public Id!: number
    public DonationTypeId!: number
    public DonationName!: string
    public Description!: string
    public MinAmount!: number
    public MaxAmount!: number
    public PayOnline!: boolean
    public Active!: boolean
}

Donation.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DonationTypeID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DonationName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MinAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    MaxAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    PayOnline: {
        type: DataTypes.BOOLEAN,
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
    tableName: "Donations",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(Donation);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default Donation;
