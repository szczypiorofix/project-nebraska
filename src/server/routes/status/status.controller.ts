import express, { Request, Response, Router } from 'express';
import { MongoDBResponse, ServerResponse } from '../../../shared';
import mongoose from 'mongoose';
import MongoClient from '../../core/MongoClient';

const statusRouter: Router = express.Router();

statusRouter.get("/server", (request: Request, response: Response) => {
    const resp: ServerResponse = {
        error: false,
        code: 200,
        message: "OK"
    };
    response.status(resp.code).json(resp);
});

statusRouter.get("/mongodb", async (request: Request, response: Response) => {
    let resp: ServerResponse & MongoDBResponse = {
        error: false,
        code: 200,
        message: "MongoDB connected"
    };
    try {
        const mongoClient = MongoClient.getInstance();
        const connection: mongoose.Connection = await mongoClient.connect();
        resp.message = "Connected to MongoDB"; //JSON.stringify(connectionObject.db.databaseName);
        resp.data = {
            dbname: connection.db.databaseName
        };
    } catch(err) {
        resp = {
            error: true,
            code: 500,
            message: JSON.stringify(err),
        }
    }
    response.status(resp.code).json(resp);
});

export default statusRouter;
