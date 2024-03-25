import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../../config/db";
import Employee from "./Employee";
import Company from "./Company";
import Permission from "./Permission";

export type UserAttributes = InferAttributes<User>;
export type UserCreationAttribute = InferCreationAttributes<User>;

class User extends Model<UserAttributes, UserCreationAttribute> {
    declare id?: number;
    declare companyId: number;
    declare username: string;
    declare password: string;
    declare isDeleted?: boolean;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "company",
            key: "id"
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    timestamps: true,
    paranoid: true,
    underscored: true
})

User.hasOne(Employee, { foreignKey: "userId" });
User.belongsTo(Company, { foreignKey: "companyId" });
Company.hasMany(User);

export default User;