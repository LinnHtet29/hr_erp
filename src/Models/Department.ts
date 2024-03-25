import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model
} from "sequelize";
import { sequelize } from "../../config/db";
import Company from "./Company";

export type DepartmentAttributes = InferAttributes<Department>;
export type DepartmentCreationAttributes = InferCreationAttributes<Department>;

class Department extends Model<DepartmentAttributes, DepartmentCreationAttributes> {
    declare id?: number;
    declare companyId: number;
    declare regularOffday: string[];
    declare description: string;
    declare isDeleted: boolean;
}

Department.init({
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
    regularOffday: {
        type: DataTypes.ENUM('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'),
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
    modelName: "Department",
    tableName: "department",
    timestamps: true,
    paranoid: true,
    underscored: true,
});

Department.belongsTo(Company, { foreignKey: "companyId" })
Company.hasMany(Department);

export default Department;