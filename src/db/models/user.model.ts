import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextUUID } from '../helpers';
import bcrypt from "bcrypt";
import config from "config";

interface userAttributes {
    Id: string
    Email: string
    EmailConfirmed: string
    PasswordHash: string
    SecurityStamp: string
    PhoneNumber: string
    PhoneNumberConfirmed: boolean
    TwoFactorEnabled: boolean
    LockoutEndDateUtc: string
    LockoutEnabled: boolean
    AccessFailedCount: number
    UserName: string
    createdAt: string
    updatedAt: string
}

export interface UserInput extends Optional<userAttributes, "Id"> {}
export interface UserOutput extends Required<userAttributes> {}

class User extends Model<userAttributes, UserInput> implements userAttributes {
    public Id!: string
    public Email!: string
    public EmailConfirmed!: string
    public PasswordHash!: string
    public SecurityStamp!: string
    public PhoneNumber!: string
    public PhoneNumberConfirmed!: boolean
    public TwoFactorEnabled!: boolean
    public LockoutEndDateUtc!: string
    public LockoutEnabled!: boolean
    public AccessFailedCount!: number
    public UserName!: string
    public createdAt!: string
    public updatedAt!: string
}

User.init({
Id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
    },
    Email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    },
    EmailConfirmed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
    },
    PasswordHash: {
    type: DataTypes.STRING,
    allowNull: true
    },
    SecurityStamp: {
    type: DataTypes.STRING,
    allowNull: true
    },
    PhoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
    },
    PhoneNumberConfirmed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
    },
    TwoFactorEnabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
    },
    LockoutEndDateUtc: {
    type: DataTypes.DATE,
    allowNull: true
    },
    LockoutEnabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0
    },
    AccessFailedCount: {
    type: DataTypes.NUMBER,
    allowNull: false,
    },
    UserName: {
    type: DataTypes.STRING,
    allowNull: false,
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
    tableName: "AspNetUsers",
    hooks: {
        beforeCreate: (async (user: any) => {
            user.Id = await getNextUUID();  
            const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));   
            const hash = bcrypt.hashSync(user.PasswordHash, salt);     
            user.PasswordHash = hash;
        }),
        beforeUpdate: (async (user: any, options) => {
            const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));   
            const hash = bcrypt.hashSync(user.PasswordHash, salt);     
            user.PasswordHash = hash;
        }),
    }
});

export default User;