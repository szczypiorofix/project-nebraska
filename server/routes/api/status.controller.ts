import express, { Request, Response, Router } from "express";
import { ServerResponse } from "../../../shared/response.model";
import MongoHelper from '../../helpers/mongo.helper';

const statusRouter: Router = express.Router();

statusRouter.get("/server", (request: Request, response: Response) => {
    const resp: ServerResponse = {
        error: false,
        code: 200,
        message: "OK"
    };
    response.status(resp.code).json(resp);
});

statusRouter.get("/mongodb", (request: Request, response: Response) => {
    let resp: ServerResponse = {
        error: false,
        code: 200,
        message: "MongoDB connected"
    };
    MongoHelper.connect()
        .then(() => {
            console.log("Connected to MongoDB");
            response.status(resp.code).json(resp);
        })
        .catch(err => {
            console.log("Database connection failed.");
            console.error(err);
            resp = {
                error: true,
                code: 500,
                message: "Database connection failed."
            }
            response.status(resp.code).json(resp);
        });
});

export default statusRouter;
