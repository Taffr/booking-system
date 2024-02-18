import { Router } from 'express'
import { getAllUsersController, registerUserController, updateUserController } from './di'
import { validateRequest } from '../validation'
import { RegisterUserSchema, UpdateUserSchema } from './controllers/schemas'
import { userGuard } from '../auth'

const router = Router()
router.get('/', getAllUsersController)
router.post('/', validateRequest(RegisterUserSchema), registerUserController)
router.put('/:id', [ userGuard, validateRequest(UpdateUserSchema) ], (updateUserController) as any) // TODO: Fix this type
// router.delete('/:id', deleteUserController)

export const userRouter = router;
export const USER_ROUTE = '/user';
