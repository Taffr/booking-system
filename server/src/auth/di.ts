import { loginControllerFactory } from "./controllers/login.controller";
import { getUserByPhone } from "../user/di";
import { hash as bHash, compare as bCompare } from "bcrypt";
import { v4 } from "uuid";
import * as jwt from "jsonwebtoken";
import { userGuardFactory } from "./middleware";

export type HashFunction = typeof bHash;
export type HashCompare = typeof compare;
export const hash = bHash;
export const compare = bCompare;
export const sign = (a: Object) => {
  return jwt.sign(a, "supersecret", { expiresIn: "1h" }); // TODO: Should be in env, and stored somewhere safe.
};
export const validateToken = (token: string) => {
  return jwt.verify(token, "supersecret"); // Same applies as above.
};
export const decodeToken = (token: string) => {
  return jwt.decode(token);
};
export type DecodeToken = typeof decodeToken;
export type ValidateToken = typeof validateToken;
export type SignJWT = typeof sign;
export type MakeUuid = typeof v4;
export const uuid = v4;

export const loginController = loginControllerFactory(
  compare,
  sign,
  getUserByPhone,
);
export const userGuard = userGuardFactory(validateToken, decodeToken);
