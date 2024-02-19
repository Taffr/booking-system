import { Request, Response } from "express";
import { GetAllUsers } from "../model/get-all-users";

export type GetUsersController = ReturnType<typeof getAllUsersQueryFactory>;
export const getAllUsersQueryFactory =
  (getAllUsers: GetAllUsers) => async (_: Request, res: Response) => {
    try {
      const users = await getAllUsers();
      res.json(users);
    } catch (e) {
      res.status(500).send("Failed to retrieve users");
    }
  };
