import { Router } from 'express'
import { getAllUsersController, registerUserController, updateUserController, deleteUserController } from './di'
import { validateRequest } from '../validation'
import { DeleteUserSchema, RegisterUserSchema, UpdateUserSchema } from './controllers/schemas'
import { userGuard } from '../auth'

const router = Router()
/**
 * Gets all regsiters users
 * @returns an array of users
 */
router.get('/', getAllUsersController)

/**
 * Registers a new user
 * @param email - the email of the new user
 * @param password - the password of the new user
 * @returns the id of the new user
 * @throws 400 - if the request is invalid
 */
router.post('/', validateRequest(RegisterUserSchema), registerUserController)

/** 
 * Updates a user
 * @param id - the id of the user to update
 * @throws 400 - if the request is invalid
 * @throws 401 - if the user is not authenticated
 * @throws 403 - if the user is not the owner of the user
 */
router.put('/:id', [ userGuard, validateRequest(UpdateUserSchema) ], updateUserController) 

/**
 * Deletes a user
 * @param id - the id of the user to delete
 * @throws 400 - if the request is invalid
 * @throws 401 - if the user is not authenticated
 * @throws 403 - if the user is not the owner of the user
 */
router.delete('/:id', [userGuard, validateRequest(DeleteUserSchema) ], deleteUserController)

export const userRouter = router;
export const USER_ROUTE = '/user';
