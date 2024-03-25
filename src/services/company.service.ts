import { FindOptions } from "sequelize";
import CompanyRepository from "../repository/company.repository";

const store = (company: any) => {
    try {
        const result = CompanyRepository.create(company);
        return result;
    } catch (error) {
        throw new Error("Create company fail");
    }
}

const update = (company: any, id: number) => {
    try {
        const result = CompanyRepository.update(company, { where: { id } });
        return result;
    } catch (error) {
        throw new Error("Update company fail");
    }
}

const CompanyService = { store, update };
export default CompanyService;