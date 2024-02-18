import { db } from '../db'
import { getAllUserFactory, addUserFactory, getUserByPhoneFactory, updateUserFactory } from './model'
import { getAllUsersQueryFactory, registerUserControllerFactory } from './controllers'
import {updateUserControllerFactory} from './controllers/update-user.controller'

export const addUser = addUserFactory(db)
export const updateUser = updateUserFactory(db)
export const getUserByPhone = getUserByPhoneFactory(db)
export const getAllUsers = getAllUserFactory(db)

import { uuid, hash } from '../auth' // Because of handrolled DI, we need to take into account import order.
export const getAllUsersController = getAllUsersQueryFactory(getAllUsers)
export const registerUserController = registerUserControllerFactory(hash, uuid, addUser)
export const updateUserController = updateUserControllerFactory(updateUser)

