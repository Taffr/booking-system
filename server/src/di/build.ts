import { getAllUsersQueryFactory } from "../user/controllers";
import { dbFactory } from "../db";
import { getAllUserFactory } from "../user/model/get-all-users";

const db = dbFactory();

export const getAllUsers = getAllUserFactory(db);
export const getAllUsersController = getAllUsersQueryFactory(getAllUsers);

