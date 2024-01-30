import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../../shared/response.model";
import loginRouter from './login/login.controller';
import statusRouter from './status.controller';

const apiRouter: Router = express.Router();

apiRouter.get("/", (request: Request, response: Response) => {
    const resp: ServerResponse = {
        code: 200,
        error: false,
        message: "API main page",
    };
    response.status(resp.code).json(resp);
});

apiRouter.use("/login", loginRouter);
apiRouter.use("/status", statusRouter);

export default apiRouter;
