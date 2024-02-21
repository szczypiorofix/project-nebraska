import { NextFunction, Request, Response } from 'express';
import AppError from '../core/AppError';

const errorHandler = (err: any, req: Request, res: Response): void => {
    let statusCode: number = res.statusCode === 200 ? 500 : res.statusCode;
    let message: string = err.message;

    res.status(500);
    res.render('error', { error: err })

    // res.status(statusCode).json({
    //     message: message,
    //     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    // });
};


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
            error: message,
            code: err.statusCode,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack
        }
    );
}


export {
    errorHandler,
    errorLogger,
    errorResponder
};
