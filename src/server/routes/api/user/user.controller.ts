import express, { Request, Response, Router } from 'express';
import { UserModel } from '../../../models';
import { UserResults, UserRouterGetResponse } from './user.model';

const userRouter: Router = express.Router();

userRouter.get("/", async (request: Request, response: Response<UserRouterGetResponse>) => {
    const users: UserResults = await UserModel.find();
    const resp: UserRouterGetResponse = {
        code: 200,
        error: false,
        message: "OK",
        data: users
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
