import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model
} from "sequelize";
import { sequelize } from "../../config/db";
import User from "./User";

export type PermissionAttributes = InferAttributes<Permission>;
export type PermissionCreationAttributes = InferCreationAttributes<Permission>;

class Permission extends Model<PermissionAttributes, PermissionCreationAttributes> {
    declare id?: number;
    declare actionName: string;
    declare description: string;
    declare isDeleted: boolean;
}

Permission.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    actionName: {
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
    modelName: "Permission",
    tableName: "permission",
    paranoid: true,
    underscored: true,
});
Permission.belongsToMany(User, { through: "User_Permission" })
User.hasMany(Permission)

export default Permission;