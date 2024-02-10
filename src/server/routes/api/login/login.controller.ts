import express, { Request, Response, Router } from 'express';
import tokenRouter from './token.controller';
import { UserRouterGetResponse } from '../user/user.model';
import { UserModel } from '../../../models';

const loginRouter: Router = express.Router();

loginRouter.use("/token", tokenRouter);

loginRouter.get("/", async (request: Request, response: Response): Promise<void> => {
  const resp: UserRouterGetResponse = {
    code: 200,
    error: false,
    message: `Users not found`
  };
  resp.data = await UserModel.find({});
  response.status(resp.code).json(resp);
});

export default loginRouter;
