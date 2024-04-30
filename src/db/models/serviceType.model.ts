import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { serviceTypeAttributes } from '../../api/interfaces/serviceType.interface';

export interface ServiceTypeInput extends Optional<serviceTypeAttributes, 'Id'> {}
export interface ServiceTypeOutput extends Required<serviceTypeAttributes> {}

class ServiceType extends Model<serviceTypeAttributes, ServiceTypeInput> implements serviceTypeAttributes {
    public Id!: number
    public ServiceTypeName!: string
    public Active!: boolean
}

ServiceType.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    ServiceTypeName: {
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
    tableName: "ServiceTypes",
    hooks: {
        beforeCreate: (async (serviceType: any) => {
        const nextId = await getNextId(ServiceType);  
        serviceType.Id = nextId[0].Id+1;
        }),
    }
});

export default ServiceType;