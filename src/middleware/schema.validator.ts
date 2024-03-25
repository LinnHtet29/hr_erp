import { Request, Response, NextFunction } from 'express';
import { validateSchema as schemas } from './../validators/validate';
import { ObjectSchema } from 'joi';

interface SchemaDictionary {
    [key: string]: ObjectSchema<any>;
}

type Path = "/create_company" | "/update_company";

const supportedMethods = ["post", "put", "delete", "patch"];

const validationOptions = {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: false,
};

const schemaValidator = (path: Path, useJoiError = true) => {

    const schema = schemas[path];

    return (req: Request, res: Response, next: NextFunction) => {
        const method = req.method.toLowerCase();
        if (!req.body.data) {
            return res.status(400).json({
                status: "fail",
                message: "Wrong request body",
                data: null
            });
        }
        if (!supportedMethods.includes(method)) {
            return next();
        }
        const { error, value } = schema.validate(req.body.data, validationOptions);
        if (error) {
            const customError = {
                status: "failed",
                error: "Invalid request. Please review request and try again.",
            };
            const joiError = {
                status: "failed",
                error: {
                    original: error._original,
                    details: error.details.map(({ message, type }: { message: string, type: string }) => ({
                        message: message.replace(/['"]/g, ""),
                        type,
                    })),
                },
            };
            return res.status(422).json(useJoiError ? joiError : customError);
        }
        req.body = value;
        return next();
    };
};

export default schemaValidator


// with Zod

// import { Request, Response, NextFunction } from 'express';
// import { validateSchema as schemas } from './../validators/validate';
// import { ZodError, z } from 'zod';

// type Path = "/create_company" | "/update_company";

// const supportedMethods = ["post", "put", "delete", "patch"];

// const validationOptions = {
//     abortEarly: false,
//     allowUnknown: false,
//     stripUnknown: false,
// };

// const schemaValidator = (path: Path, useJoiError = true) => {
//     const schema = schemas[path];

//     return (req: Request, res: Response, next: NextFunction) => {
//         const method = req.method.toLowerCase();
//         if (!req.body.data) {
//             return res.status(400).json({
//                 status: "fail",
//                 message: "Wrong request body",
//                 data: null
//             });
//         }
//         if (!supportedMethods.includes(method)) {
//             return next();
//         }
//         try {
//             const value = schema.parse(req.body.data);
//             req.body = value;
//             return next();
//         } catch (error: unknown) {
//             const customError = {
//                 status: "failed",
//                 error: "Invalid request. Please review request and try again.",
//             };
//             if (error instanceof ZodError) {
//                 const zodError = {
//                     status: "failed",
//                     error: {
//                         original: error,
//                         details: (error as ZodError).errors.map((error) => ({
//                             message: error.message,
//                             path: error.path.join('.'),
//                         })),
//                     },
//                 };
//                 return res.status(422).json(useJoiError ? zodError : customError);
//             }
//         }
//     };
// };

// export default schemaValidator;
