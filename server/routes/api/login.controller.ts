import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../models/response.model";

const loginRouter: Router = express.Router();

loginRouter.post("/", (request: Request, response: Response) => {
  response.status(200).json({}).end();
});

loginRouter.get("/", (request: Request, response: Response) => {
  const resp: ServerResponse = {
    code: 401,
    error: true,
    message: "Unauthorized access",
  };
  response.status(resp.code).json(resp).end();
});

export { loginRouter };
