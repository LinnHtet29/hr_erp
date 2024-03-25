import { CreateOptions, FindOptions, Identifier, UpdateOptions } from "sequelize";
import Company, { CompanyAttributes } from "../Models/Company";

type createData = {
    id: number,
    name: string,
    description?: string,
}

type updateData = {
    name?: string,
    description?: string,
    isDeleted?: boolean,
}

const findAll = (options: FindOptions<Company>) => Company.findAll(options);

const findByPk = (identifier: Identifier, options?: FindOptions<Company>) => Company.findByPk(identifier, options);

const findCount = (options: FindOptions<Company>) => Company.findAll(options);

const findByCriteria = (criteria: any, options: FindOptions<Company>) =>
    Company.findAll({ where: { ...criteria }, ...options });

const create = (data: createData, options?: CreateOptions<CompanyAttributes>) =>
    Company.create(data, options);

const update = (data: updateData, options?: UpdateOptions<CompanyAttributes> | any) =>
    Company.update(data, {
        where: options?.where || {},
        returning: true,
        individualHooks: true,
        ...options,
    });

const CompanyRepository = { findAll, findByCriteria, findByPk, findCount, create, update }
export default CompanyRepository;