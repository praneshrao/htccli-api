import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { profileAttributes } from '../../api/interfaces/profile.interface';

export interface ProfileInput extends Optional<profileAttributes, "Id"> {}
export interface ProfileOutput extends Required<profileAttributes> {}

class Profile extends Model<profileAttributes, ProfileInput> implements profileAttributes {
    public Id!: number
    public TempleName!: string
    public TempleShortName!: string
    public TempleLogo!: string
    public TempleBanner!: string
    public TempleDescription!: string
    public Address1!: string
    public City!: string
    public State!: string
    public ZipCode!: string
    public PhoneNumber!: string
    public EmailAddress!: string
    public TaxID!: string
    public WebsiteURL!: string
    public Latitude!: number
    public Longitude!: number
    public PlusCode!: string
}

Profile.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    TempleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TempleShortName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TempleLogo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TempleBanner: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TempleDescription: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Address1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    City: {
        type: DataTypes.STRING,
        allowNull: true
    },
    State: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ZipCode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    EmailAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TaxID: {
        type: DataTypes.STRING,
        allowNull: true
    },
    WebsiteURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Latitude: {
        type: DataTypes.DECIMAL(9,7),
        allowNull: true
    },
    Longitude: {
        type: DataTypes.DECIMAL(9,7),
        allowNull: true
    },
    PlusCode: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: db,
    freezeTableName: true, 
    timestamps: false,
    tableName: "TempleProfile",
    hooks: {
        beforeCreate: (async (profile: any) => {
        const nextId = await getNextId(Profile);  
        profile.Id = nextId[0].Id+1;
        }),
    }
});

export default Profile;