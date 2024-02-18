import { Router } from 'express'
import { getAllUsersController, registerUserController } from './di'
import { validateRequest } from '../validation'
import { registerUserSchema } from './controllers/schemas'

const router = Router()
router.get('/all', getAllUsersController)
router.post('/register', validateRequest(registerUserSchema), registerUserController)

export const userRouter = router;
export const USER_ROUTE = '/user';
