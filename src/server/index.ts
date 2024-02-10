import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import session from 'express-session';

import { headerMiddleware, loggerMiddleware, } from './middleware/app.middleware';
import rootRouter from './routes/root.controller';
import MongoDBService from './services/mongodb.service';

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

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({});
})

app.listen(PORT, (): void => {
    console.log(`Server running at http://localhost:${PORT}`);
    const mongoService: MongoDBService = new MongoDBService();
    mongoService.connect().then((connection) => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('MongoDB connection error', err);
    });
});
