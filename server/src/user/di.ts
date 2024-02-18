import { db } from '../db'
import { getAllUserFactory, addUserFactory, getUserByPhoneFactory } from './model'
import { getAllUsersQueryFactory, registerUserControllerFactory } from './controllers'

export const addUser = addUserFactory(db)
export const getUserByPhone = getUserByPhoneFactory(db)
console.log('GETUSERBYPHONE', getUserByPhone)
export const getAllUsers = getAllUserFactory(db)
export const getAllUsersController = getAllUsersQueryFactory(getAllUsers)
import { uuid, hash } from '../auth'
export const registerUserController = registerUserControllerFactory(hash, uuid, addUser)
