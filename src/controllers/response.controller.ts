import { Response } from 'express';
import { itemNotFoundError } from '../errors/db.error';

export const success = (res: Response, message: string, data: any) => {
    return res.status(200).json({
        status: "success",
        message,
        data,
    });
}

export const retrieved = (res: Response, name: string, message: string, data: any = null) => {
    if (!data) {
        throw itemNotFoundError(name);
    }
    return success(res, message, data);
}

export const created = (res: Response, message: string, data: any = null) => {
    return res.status(201).json({
        status: "created",
        message,
        data
    })
}

export const updated = (res: Response, name: string, message: string, data: (any | null)) => {
    if (!data) {
        throw itemNotFoundError(name);
    }
    return success(res, message, data);
};

export const unauthorized = (res: Response, message: string, data: (any | null)) => {
    return res.status(401).json({
        status: "forbidden",
        message,
        data,
    });
};

export const error = (res: Response, message: string, data: (any | null)) => {
    return res.status(500).json({
        status: "error",
        message,
        data,
    });
};

export const deleted = (res: Response, name: string, message: string, data: (any | null)) => {
    if (!data) {
        throw itemNotFoundError(name);
    }
    return success(res, message, data);
};

// export const paginatedData = (req, content, pageable) => {
//     return req.query.page && req.query.size ? { content, pageable } : content;
// };