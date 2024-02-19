import { db } from "../db";
import {
  getAllUserFactory,
  addUserFactory,
  getUserByPhoneFactory,
  updateUserFactory,
  deleteUserFactory,
} from "./model";
import {
  getAllUsersQueryFactory,
  registerUserControllerFactory,
  updateUserControllerFactory,
  deleteUserControllerFactory,
} from "./controllers";

export const addUser = addUserFactory(db);
export const updateUser = updateUserFactory(db);
export const getUserByPhone = getUserByPhoneFactory(db);
export const getAllUsers = getAllUserFactory(db);
export const deleteUser = deleteUserFactory(db);

import { uuid, hash } from "../auth"; // Because of handrolled DI, we need to take into account import order.
export const getAllUsersController = getAllUsersQueryFactory(getAllUsers);
export const registerUserController = registerUserControllerFactory(
  hash,
  uuid,
  addUser,
);
export const updateUserController = updateUserControllerFactory(updateUser);
export const deleteUserController = deleteUserControllerFactory(deleteUser);
