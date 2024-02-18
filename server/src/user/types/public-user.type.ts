import { User } from "../../db";

export type PublicUser = Omit<User, 'hash'>;
