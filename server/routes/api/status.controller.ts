import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../../shared/response.model";

const statusRouter: Router = express.Router();

statusRouter.get("/", (request: Request, response: Response) => {
    const resp: ServerResponse = {
        error: false,
        code: 200,
        message: "OK"
    };
    response.status(resp.code).json(resp);
});

export default statusRouter;
