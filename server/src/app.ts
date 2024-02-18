import express from 'express';
import bodyParser from 'body-parser';
import { userRouter, USER_ROUTE} from './user';
import { AUTH_ROUTE, authRouter } from './auth';

export const app = express();

app.use(bodyParser.json())
app.use(USER_ROUTE, userRouter)
app.use(AUTH_ROUTE, authRouter)

