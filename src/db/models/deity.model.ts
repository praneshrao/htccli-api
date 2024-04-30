import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { IDeity } from '../../api/interfaces/deity.interface'

export interface DeityInput extends Optional<IDeity, 'Id'> {}
export interface DeityOutput extends Required<IDeity> {}

class Deity extends Model<IDeity, DeityInput> implements IDeity {
    public Id!: number
    public DeityName!: string
    public DeityImageFile!: string
    public Active!: boolean
}

Deity.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DeityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DeityImageFile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: db,
    freezeTableName: true, 
    timestamps: false,
    tableName: "Deities",
    hooks: {
        beforeCreate: (async (deity: any) => {
        const nextId = await getNextId(Deity);  
        deity.Id = nextId[0].Id+1;
        }),
    }
});

export default Deity;