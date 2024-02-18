import { db } from '../db'
import { uuid, hash } from '../auth'
import { getAllUserFactory, addUserFactory } from './model'
import { getAllUsersQueryFactory, registerUserControllerFactory } from './controllers'

export const addUser = addUserFactory(db)
export const registerUserController = registerUserControllerFactory(hash, uuid, addUser)
export const getAllUsers = getAllUserFactory(db)
export const getAllUsersController = getAllUsersQueryFactory(getAllUsers)
