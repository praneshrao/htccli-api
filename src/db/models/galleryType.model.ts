import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { galleryTypeAttributes } from '../../api/interfaces/galleryType.interface';

export interface GalleryTypeInput extends Optional<galleryTypeAttributes, 'Id'> {}
export interface GalleryTypeOutput extends Required<galleryTypeAttributes> {}

class GalleryType extends Model<galleryTypeAttributes, GalleryTypeInput> implements galleryTypeAttributes {
    public Id!: number
    public GalleryTypeName!: string
    public Active!: boolean
}

GalleryType.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    GalleryTypeName: {
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
    tableName: "GalleryTypes",
    hooks: {
        beforeCreate: (async (galleryType: any) => {
        const nextId = await getNextId(GalleryType);  
        galleryType.Id = nextId[0].Id+1;
        }),
    }
});

export default GalleryType;