import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { headerMiddleware, loggerMiddleware, } from './middleware/app.middleware';
import rootRouter from './routes/root.controller';
import session from 'express-session';
import Sqlite3Helper from './helpers/sqlite3/sqlite3.helper';

dotenv.config({ path: __dirname+'/.env' });

const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

app.set('view engine', 'ejs');

// Middleware
app.use(loggerMiddleware);
app.use(headerMiddleware);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false
}));

// Routes
app.use("/", rootRouter);

app.use("*", (req, res) => {
  res.status(404).json({});
})

const sqlite3Helper = new Sqlite3Helper();
sqlite3Helper.init();
sqlite3Helper.close();

app.listen(PORT, (): void => {
  console.log(`Server running at http://localhost:${PORT}`);
});
