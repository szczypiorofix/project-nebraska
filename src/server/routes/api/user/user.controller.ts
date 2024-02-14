import express, { Request, Response, Router } from 'express';
import { MongooseDocument, UserModel } from '../../../models';
import { UserResults, UserRouterGetResponse } from './user.model';
import { IUser, IUserDefaults } from '../../../../shared';
import MongooseDocumentMapper from '../../../helpers/mongodb/mongo.helper';

const userRouter: Router = express.Router();

userRouter.get("/", async (request: Request, response: Response<UserRouterGetResponse>) => {
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

userRouter.get("/:id", async (request: Request, response: Response<UserRouterGetResponse>) => {
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

userRouter.post("/", async (request: Request, response: Response<UserRouterGetResponse>) => {

    ///

});

export default userRouter;
