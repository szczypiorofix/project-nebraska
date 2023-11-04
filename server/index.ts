import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import {
  headerMiddleware,
  loggerMiddleware,
} from "./middleware/app.middleware";
import { loginRouter } from "./routes/login.controller";
import MongoHelper from './helpers/mongo.helper';

dotenv.config({ path: __dirname+'/.env' });

const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

// Middleware
app.use(loggerMiddleware);
app.use(headerMiddleware);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/login", loginRouter);

app.get("/", (req: Request, res: Response): void => {
  MongoHelper.connect()
      .then((connection) => {
          console.log("Connection established...");
          console.log(connection)

          res.status(200).send("OK");
      })
      .catch(err => {
        console.error(err);
      });

});

app.listen(PORT, (): void => {
  console.log(`Server running at http://localhost:${PORT}`);
});
