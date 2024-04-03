import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { educationAttributes } from '../../api/interfaces/education.interface';

export interface EducationInput extends Optional<educationAttributes, 'Id'> {}
export interface EducationOutput extends Required<educationAttributes> {}

class Education extends Model<educationAttributes, EducationInput> implements educationAttributes {
    public Id!: number
    public FeeFrequencyId!: number
    public EducationTypeId!: number
    public EducationName!: string
    public Description!: string
    public DayTime!: string
    public ImageFile!: string
    public Fees!: number
    public Register!: boolean
    public Active!: boolean
}

Education.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    FeeFrequencyId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EducationTypeID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EducationName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DayTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ImageFile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Fees: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    Register: {
        type: DataTypes.BOOLEAN,
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
    tableName: "EducationPrograms",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(Education);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default Education;