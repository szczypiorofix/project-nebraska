import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../../models/response.model";
import TokenHelper from '../../../helpers/token.helper';

const tokenRouter: Router = express.Router();

tokenRouter.get("/", (request: Request, response: Response) => {
    const resp: ServerResponse = {
        code: 200,
        error: false,
        message: TokenHelper.generateSecretToken()
    };
    response.status(resp.code).json(resp).end();
});

tokenRouter.post("/", (request: Request, response: Response) => {
    if (request.body.username) {
        const token = TokenHelper.generateAccessToken(request.body.username);
        response.json(token);
    }
    response.status(401).json({}).end();
});

export { tokenRouter };

