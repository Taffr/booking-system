import { Router } from 'express'
import { getAllUsersController, registerUserController } from './di'

const router = Router()
router.get('/all', getAllUsersController)
router.post('/register', registerUserController)

export const userRouter = router;
export const USER_ROUTE = '/user';
