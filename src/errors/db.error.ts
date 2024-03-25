export const invalidIdError = (key: string) => {
    let err = new Error(key);
    err.name = 'INVALID_ID';
    return err;
};

export const invalidError = (key: string) => {
    let err = new Error(key);
    err.name = 'INVALID';
    return err;
};

export const itemNotFoundError = (name: string) => {
    let err = new Error(name);
    err.name = 'ITEM_NOT_FOUND';
    return err;
};

export const alreadyExistsError = (name: string) => {
    let err = new Error(name);
    err.name = 'ITEM_ALREADY_EXISTS';
    return err;
};

export const unprocessableError = (name: string) => {
    let err = new Error(name);
    err.name = 'UNPROCESSABLE';
    return err;
};

export const unsupportedMediaTypeError = (name: string) => {
    let err = new Error(name);
    err.name = 'UNSUPPORTED_MEDIA_TYPE';
    return err;
};

export const missingFileError = (name: string) => {
    let err = new Error(name);
    err.name = 'MISSING_FILE';
    return err;
};
export const failMovingFilesError = (name: string) => {
    let err = new Error(name);
    err.name = 'FAIL_MOVING_FILES';
    return err;
};

export const unauthorizedError = (name: string) => {
    let err = new Error(name);
    err.name = 'UNAUTHORIZED';
    return err;
};

export const notAcceptableError = (name: string) => {
    let err = new Error(name);
    err.name = 'NOT_ACCEPTABLE';
    return err;
};