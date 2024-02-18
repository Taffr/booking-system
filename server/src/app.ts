import express from 'express'
import bodyParser from 'body-parser'
import { userRouter, USER_ROUTE} from './user'
import { AUTH_ROUTE, authRouter } from './auth'
import { propertiesRouter, PROPERTIES_ROUTE } from './properties'
import { reservationsRouter, RESERVATIONS_ROUTE } from './reservations'

export const app = express();

app.use(bodyParser.json())
app.use(USER_ROUTE, userRouter)
app.use(AUTH_ROUTE, authRouter)
app.use(PROPERTIES_ROUTE, propertiesRouter)
app.use(RESERVATIONS_ROUTE, reservationsRouter)
