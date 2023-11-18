import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../models/response.model";
import loginRouter from './login/login.controller';

const apiRouter: Router = express.Router();

apiRouter.get("/", (request: Request, response: Response) => {
    const resp: ServerResponse = {
        code: 200,
        error: false,
        message: "API main page",
    };
    response.status(resp.code).json(resp).end();
});

apiRouter.use("/login", loginRouter);

export default apiRouter;
