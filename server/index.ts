import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import {
  headerMiddleware,
  loggerMiddleware,
} from "./middleware/app.middleware";
import { loginRouter } from "./routes/login.controller";
import { rootRouter } from './routes/root.controller';

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

// Standard ping test connection
app.use("/", rootRouter);

app.listen(PORT, (): void => {
  console.log(`Server running at http://localhost:${PORT}`);
});
