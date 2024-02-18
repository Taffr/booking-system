import { validateRequest } from "../validation"
import { Router } from 'express'
import { LoginSchema} from './controllers/schemas/login.schema'
import { loginController } from './di'


const router = Router()

router.post('/login', validateRequest(LoginSchema), loginController)

export const AUTH_ROUTE = '/auth'
export const authRouter = router
