import { Request, Response, NextFunction } from 'express';
import { created, deleted, error, success, updated } from './response.controller';
import CompanyService from '../services/company.service';

export const getCompanies = (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = { company: [] };
        success(res, "Companies successfully retrieved.", data)
    } catch (error) {
        next(error);
    }
}

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const savedCompany = await CompanyService.store(req.body);
        if (savedCompany)
            created(res, "Company successfully created.", savedCompany);
        error(res, "Create Company failed", savedCompany);
    } catch (error) {
        next(error);
    }
}

export const updateCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) error(res, "Id is required", null);
        console.log("ID", id);
        const updatedCompany = await CompanyService.update(req.body, parseInt(id));
        console.log(updatedCompany);
        if (updatedCompany) updated(res, "Company", "Company successfully updated.", updatedCompany);
        error(res, "Update Company failed", updatedCompany);
    } catch (error) {
        next(error);
    }
}

export const deleteCompany = (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = null;
        deleted(res, "Company", "Company successfully deleted", data);
    } catch (error) {
        next(error);
    }
}