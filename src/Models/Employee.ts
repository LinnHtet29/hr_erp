import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model
} from "sequelize";
import { sequelize } from "../../config/db";
import Department from "./Department";

export type EmployeeAttributes = InferAttributes<Employee>;
export type EmployeeCreationAttributes = InferCreationAttributes<Employee>;

class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> {
    declare staffId?: number;
    declare departmentId: number;
    declare fullName: string;
    declare dob: Date;
    declare nrcNo: string;
    declare address: string;
    declare description: string;
    declare isActive: boolean;
    declare isDeleted: boolean;
}

Employee.init({
    staffId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Department",
            key: "id"
        }
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    nrcNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employee',
    timestamps: true,
    paranoid: true,
    underscored: true
})

Employee.belongsTo(Department, { foreignKey: "departmentId" });
Department.hasMany(Employee);

export default Employee;