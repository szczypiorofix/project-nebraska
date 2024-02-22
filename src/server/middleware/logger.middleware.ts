import { NextFunction, Request, Response } from 'express';

export function loggerMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
) {
    console.log(`(${request.method}) ${request.protocol}://${request.get('host')}${request.originalUrl}`);
    next();
}
