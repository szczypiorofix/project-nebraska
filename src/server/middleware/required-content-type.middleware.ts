import { NextFunction, Request, Response } from 'express';

const requiredContentTypeHandler = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).json({ message: 'Content-Type must be application/json' });
    } else {
        next();
    }
}

export { requiredContentTypeHandler };
