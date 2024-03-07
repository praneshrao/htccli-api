import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextUUID } from '../helpers';

interface sessionAttributes {
    Id: string
    UserId: string
    UserAgent: string
    Valid: boolean
    createdAt: string
    updatedAt: string
}

export interface SessionInput extends Optional<sessionAttributes, "Id"> {}
export interface SessionOutput extends Required<sessionAttributes> {}

class Session extends Model<sessionAttributes, SessionInput> implements sessionAttributes {
    public Id!: string
    public UserId!: string
    public UserAgent!: string
    public Valid!: boolean
    public createdAt!: string
    public updatedAt!: string
}

Session.init({
    Id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserAgent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db,
    freezeTableName: true, 
    timestamps: false,
    tableName: "AspNetUserSession",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        schedule.Id = await getNextUUID();  
        }),
    }
});

export default Session;