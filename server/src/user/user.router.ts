import { Router } from 'express'
import { getAllUsersController, registerUserController, updateUserController } from './di'
import { validateRequest } from '../validation'
import { RegisterUserSchema, UpdateUserSchema } from './controllers/schemas'

const router = Router()
router.get('/', getAllUsersController)
router.post('/', validateRequest(RegisterUserSchema), registerUserController)
router.put('/:id', validateRequest(UpdateUserSchema), updateUserController)
// router.delete('/:id', deleteUserController)

export const userRouter = router;
export const USER_ROUTE = '/user';
