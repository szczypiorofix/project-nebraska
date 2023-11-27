import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../shared/response.model";
import apiRouter from './api/api.controller';

const rootRouter: Router = express.Router();

rootRouter.get("/", (req: Request, res: Response): void => {
    const resp: ServerResponse = {
        code: 200,
        message: "OK",
        error: false
    }
    res.status(200).json(resp);
});

rootRouter.use('/api', apiRouter);

export default rootRouter;
