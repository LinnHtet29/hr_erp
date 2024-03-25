import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model
} from "sequelize";
import { sequelize } from "../../config/db";
import Company from "./Company"; // Import Company here

export type PublicHolidayAttributes = InferAttributes<PublicHoliday>;
export type PublicHolidayCreationAttributes = InferCreationAttributes<PublicHoliday>;

class PublicHoliday extends Model<PublicHolidayAttributes, PublicHolidayCreationAttributes> {
    declare id?: number;
    declare companyId: number;
    declare name: string;
    declare image: string;
    declare isDeleted: boolean;
}

PublicHoliday.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Company",
            key: "id"
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    sequelize,
    modelName: 'PublicHoliday',
    tableName: 'publicHoliday',
    paranoid: true,
    underscored: true,
});

PublicHoliday.belongsTo(Company, { foreignKey: "companyId" });
Company.hasOne(PublicHoliday);

export default PublicHoliday;
