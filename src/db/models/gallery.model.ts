import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { galleryAttributes } from '../../api/interfaces/gallery.interface';
import GalleryType from './galleryType.model';

export interface GalleryInput extends Optional<galleryAttributes, 'Id'> {}
export interface GalleryOutput extends Required<galleryAttributes> {}

class Gallery extends Model<galleryAttributes, GalleryInput> implements galleryAttributes { 
    public Id!: number
    public GalleryTypeId!: number
    public Title!: string
    public Description!: string
    public Thumbnail!: string
    public ImageFile!: string
    public ImageURL!: string
    public AlbumURL!: string
    public Active!: boolean
}

Gallery.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    GalleryTypeId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ImageFile: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ImageURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AlbumURL: {
        type: DataTypes.STRING,
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
    tableName: "ImageGallery",
    hooks: {
        beforeCreate: (async (gallery: any) => {
        const nextId = await getNextId(Gallery);  
        gallery.Id = nextId[0].Id+1;
        }),
    }
});

Gallery.belongsTo(GalleryType, { foreignKey: "GalleryTypeId"})

export default Gallery;