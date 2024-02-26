import { NextFunction, Request, Response } from 'express';
import AppError from '../core/AppError';

const errorLogger = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(`ERROR LOGGER: ${err.message}`);
    next(err);
}

const errorResponder = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
    res.header("Content-Type", 'application/json');
    let statusCode = err.statusCode || 400;
    let message = err.message;

    // If Mongoose not found error, set to 404 and change message
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json(
        {
            error: true,
            code: err.statusCode,
            message: message,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        }
    );
}

const asyncErrorHandlerMiddleware = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export {
    asyncErrorHandlerMiddleware,
    errorLogger,
    errorResponder
};
