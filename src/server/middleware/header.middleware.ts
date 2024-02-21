import { NextFunction, Request, Response } from 'express';

export function headerMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
) {
    response.header('Content-Type', 'application/json');
    next();
}
