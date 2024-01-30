import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../../../shared/response.model";
import tokenRouter from './token.controller';

const loginRouter: Router = express.Router();

loginRouter.use("/token", tokenRouter);

loginRouter.post("/", (request: Request, response: Response) => {
  const resp: ServerResponse = {
    code: 401,
    error: true,
    message: "Unauthorized access",
  };
  response.status(resp.code).json(resp);
});

export default loginRouter;
