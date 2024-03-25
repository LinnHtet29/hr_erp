import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model
} from 'sequelize';
import { sequelize } from '../../config/db';

export type CompanyAttributes = InferAttributes<Company>;
export type CompanyCreationAttributes = InferCreationAttributes<Company>;

class Company extends Model<CompanyAttributes, CompanyCreationAttributes> {
    declare id?: number;
    declare name: string;
    declare description?: string;
    declare isDeleted?: boolean;
}

Company.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    sequelize,
    modelName: 'Company',
    tableName: 'company',
    timestamps: true,
    paranoid: true,
    underscored: true,
});

export default Company;