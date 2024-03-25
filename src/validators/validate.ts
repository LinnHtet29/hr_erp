import { companyCreateSchema, companyUpdateSchema } from "./company.validator";

export const validateSchema = {
    "/create_company": companyCreateSchema,
    "/update_company": companyUpdateSchema,
};