import { Router } from 'express'
import { getAllUsersController, registerUserController, updateUserController, deleteUserController } from './di'
import { validateRequest } from '../validation'
import { DeleteUserSchema, RegisterUserSchema, UpdateUserSchema } from './controllers/schemas'
import { userGuard } from '../auth'

const router = Router()
router.get('/', getAllUsersController)
router.post('/', validateRequest(RegisterUserSchema), registerUserController)
router.put('/:id', [ userGuard, validateRequest(UpdateUserSchema) ], updateUserController) 
router.delete('/:id', [userGuard, validateRequest(DeleteUserSchema) ], deleteUserController)

export const userRouter = router;
export const USER_ROUTE = '/user';
