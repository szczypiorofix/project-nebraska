import express, { Request, Response, Router } from 'express';
import { ServerResponse } from '../../../shared';
import loginRouter from './login/login.controller';
import statusRouter from './status.controller';
import userRouter from './user/user.controller';
import registerRouter from './register/register.controller';

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
apiRouter.use("/register", registerRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/status", statusRouter);

export default apiRouter;
