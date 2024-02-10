import express, { Request, Response, Router } from 'express';

import { UserModel } from '../../../models';
import { RegisterRouterGetResponse } from './register.model';

const registerRouter: Router = express.Router();

registerRouter.post("/", async (request: Request, response: Response): Promise<void> => {
    const { email, password, password2 } = request.body;
    const resp: RegisterRouterGetResponse = {
        code: 200,
        error: true,
        message: `User already exists`
    };

    const userExists = await UserModel.find({
        email: email
    });

    if (Array.isArray(userExists) && userExists.length > 0) {
        response.status(resp.code).json(resp);
        return;
    }

    const newUser = new UserModel({
        email: email,
        password: password
    });

    newUser.save()
        .then((doc) => {
          console.log('User saved', doc);
          resp.code = 200;
          resp.error = false;
          resp.message = "User registered";

          // resp.data = doc.map(item => ({
          //     email: item.email,
          //     password: item.password
          // }) as User);
          response.status(resp.code).json(resp);
        })
        .catch((err) => {
          console.error('User save error', err);
          resp.code = 500;
          response.status(resp.code).json(resp);
        });
});

export default registerRouter;
