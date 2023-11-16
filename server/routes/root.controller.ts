import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../models/response.model";

const rootRouter: Router = express.Router();

rootRouter.get("/", (req: Request, res: Response): void => {
    const resp: ServerResponse = {
        code: 200,
        message: "OK",
        error: false
    }
    res.status(200).send(resp);
});

export { rootRouter };
