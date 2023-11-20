import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../models/response.model";

const statusRouter: Router = express.Router();

statusRouter.get("/", (request: Request, response: Response) => {
    const resp: ServerResponse = {
        code: 200,
        error: false,
        message: "OK",
    };
    response.status(resp.code).json(resp);
});

export default statusRouter;
