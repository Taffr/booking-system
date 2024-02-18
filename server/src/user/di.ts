import { db } from '../db'
import { getAllUserFactory } from './model'
import { getAllUsersQueryFactory } from './controllers'

export const getAllUsers = getAllUserFactory(db);
export const getAllUsersController = getAllUsersQueryFactory(getAllUsers);
