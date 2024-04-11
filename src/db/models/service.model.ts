import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { serviceAttributes } from '../../api/interfaces/service.interface';
import ServiceType from './serviceType.model';

export interface ServiceInput extends Optional<serviceAttributes, 'Id'> {}
export interface ServiceOutput extends Required<serviceAttributes> {}

class Service extends Model<serviceAttributes, ServiceInput> implements serviceAttributes {
    public Id!: number
    public ServiceTypeId!: number
    public ServiceName!: string
    public Description!: string;
    public ServicePrice!: number
    public PayOnline!: boolean;
    public Active!: boolean
}

Service.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    ServiceTypeId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    ServiceName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ServicePrice: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    PayOnline: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    tableName: "Services",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(Service);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

Service.belongsTo(ServiceType, { foreignKey: "ServiceTypeId"})

export default Service;