import { Router } from 'express'
import { getAllUsersController } from './di'

const router = Router()
router.get('/all', getAllUsersController)

export const userRouter = router;
export const USER_ROUTE = '/user';
