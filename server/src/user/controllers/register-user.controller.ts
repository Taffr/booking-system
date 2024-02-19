import type { Response } from "express";
import type { HashFunction, MakeUuid } from "../../auth";
import type { AddUser } from "../model";
import type { RegisterUserInput } from "./schemas";
import { ValidatedRequest } from "../../validation";

export type RegisterUserController = ReturnType<
  typeof registerUserControllerFactory
>;
export const registerUserControllerFactory = (
  hash: HashFunction,
  uuid: MakeUuid,
  addUser: AddUser,
) => {
  return async (req: ValidatedRequest<RegisterUserInput>, res: Response) => {
    const { name, phone, password } = req.body;
    const h = await hash(password, 10);
    const id = uuid();

    try {
      await addUser({
        id,
        name,
        phone,
        hash: h,
      });
      res.status(201).json({ id });
    } catch (e) {
      return res.status(500).json({ message: "Could not add user" });
    }
  };
};
