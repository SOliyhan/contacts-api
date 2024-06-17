import { constant } from "../constants.js";

const errorResponse = (statusCode, err) => ({
    errorType: statusCode,
    message: err.message,
    stackTrace: err.stack
});

const errorHandler = (err, req, res, next)=> {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constant.VALIDATION_ERROR:
        case constant.UNAUTHORIZED:
        case constant.FORBIDDEN:
        case constant.NOT_FOUND:
            res.json(errorResponse(statusCode, err));
            break;
        default:
            res.status(constant.SERVER_ERROR).json(errorResponse(constant.SERVER_ERROR, err));
            break;
    }
}

export { errorHandler }