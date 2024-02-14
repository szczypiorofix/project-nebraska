import express, { Request, Response, Router } from 'express';

import { MongooseDocument, UserModel } from '../../../models';
import { RegisterRouterGetResponse } from './register.model';
import { IUser, IUserDefaults } from '../../../../shared';
import MongooseDocumentMapper from '../../../helpers/mongodb/mongo.helper';

const registerRouter: Router = express.Router();

registerRouter.post("/", async (request: Request, response: Response): Promise<void> => {
    const { email, password, password2 } = request.body;
    const resp: RegisterRouterGetResponse = {
        code: 200,
        error: true,
        message: `User already exists`
    };

    if ( password !== password2 ) {
        resp.code = 400;
        resp.message = `Passwords do not match`;
        response.status(resp.code).json(resp);
        return;
    }

    const userExists: (MongooseDocument<IUser>)[] = await UserModel.find({
        email: email
    });

    if (Array.isArray(userExists) && userExists.length > 0) {
        response.status(resp.code).json(resp);
        return;
    }

    const newUser: MongooseDocument<IUser> = new UserModel({
        email: email,
        password: password
    });

    newUser.save()
        .then((doc: MongooseDocument<IUser>) => {
            resp.code = 200;
            resp.error = false;
            resp.message = "User registered";
            resp.data = MongooseDocumentMapper<IUser>(doc, IUserDefaults)[0];
            response.status(resp.code).json(resp);
        })
        .catch((err) => {
            console.error('User save error', err);
            resp.code = 500;
            response.status(resp.code).json(resp);
        });
});

export default registerRouter;
