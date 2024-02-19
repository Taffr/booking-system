import type { PublicUser } from "../../user/types";

export type WithUser<T> = T & { user: PublicUser };
