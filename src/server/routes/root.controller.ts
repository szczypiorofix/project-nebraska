import express, { Router } from 'express';
import usersRouter from './users/users.controller';
import statusRouter from './status/status.controller';

const rootRouter: Router = express.Router();
const apiRouter: Router = express.Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/status", statusRouter);

rootRouter.use('/api/v1', apiRouter);

export default rootRouter;
