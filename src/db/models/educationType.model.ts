import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';

interface educationTypeAttributes {
    Id: number
    EducationTypeName: string
    Active: boolean
}

export interface EducationTypeInput extends Optional<educationTypeAttributes, 'Id'> {}
export interface EducationTypeOutput extends Required<educationTypeAttributes> {}

class EducationType extends Model<educationTypeAttributes, EducationTypeInput> implements educationTypeAttributes {
    public Id!: number
    public EducationTypeName!: string
    public Active!: boolean
}

EducationType.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EducationTypeName: {
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
    tableName: "EducationTypes",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(EducationType);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default EducationType;