import express from 'express';
import { userRouter, USER_ROUTE} from './user';

export const app = express();

app.use(USER_ROUTE, userRouter)

