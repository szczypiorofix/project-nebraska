import express, { Request, Response, Router } from 'express';
import { MongooseDocument, UserModel } from '../../models';
import { UserResults, UserRouterGetResponse } from './models/users.model';
import { IUser, IUserDefaults } from '../../../shared';
import MongooseDocumentMapper from '../../helpers/mongodb/mongo.helper';
import { RegisterRouterGetResponse } from './models/register.model';

const usersRouter: Router = express.Router();

usersRouter.get("/", async (request: Request, response: Response<UserRouterGetResponse>) => {
    const users: MongooseDocument<IUser>[] = await UserModel.find();
    const usersFiltered: IUser[] = MongooseDocumentMapper<IUser>(users, IUserDefaults);
    const resp: UserRouterGetResponse = {
        code: 200,
        error: false,
        message: "OK",
        data: usersFiltered
    }
    response.status(resp.code).json(resp);
});

usersRouter.get("/:id", async (request: Request, response: Response<UserRouterGetResponse>) => {
    const id: string = request.params.id;
    const users: UserResults = await UserModel.find({id: id});
    const resp: UserRouterGetResponse = {
        code: 200,
        error: false,
        message: `User with id ${id} found`,
        data: users
    };
    response.status(resp.code).json(resp);
});

// =============== LOGIN ===============

usersRouter.post("/login", async (request: Request, response: Response<UserRouterGetResponse>) => {
    const { email, password } = request.body;
    const resp: UserRouterGetResponse = {
        code: 404,
        error: false,
        message: `Users not found`
    };
    const userExists: (MongooseDocument<IUser>)[] = await UserModel.find({
        email: email,
        password: password
    });
    if (Array.isArray(userExists) && userExists.length > 0) {
        resp.code = 200;
        resp.message = `User found`;
        resp.data = MongooseDocumentMapper<IUser>(userExists, IUserDefaults);
    }
    response.status(resp.code).json(resp);
});

// =============== REGISTER ===============

usersRouter.post("/register", async (request: Request, response: Response): Promise<void> => {
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

export default usersRouter;
