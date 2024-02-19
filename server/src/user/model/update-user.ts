import type { Connection, UpdateableUser } from "../../db";
import type { RequiredId } from "../../util";
import { Result } from "../../util";

export type UpdateUser = ReturnType<typeof updateUserFactory>;
export const updateUserFactory =
  (db: Connection) => async (userUpdate: RequiredId<UpdateableUser>) => {
    const { id, ...rest } = userUpdate;
    try {
      const res = await db
        .updateTable("users")
        .set(rest)
        .where("id", "=", id)
        .executeTakeFirst();
      return Result.ok(res);
    } catch (e) {
      return Result.fail(`Failed to update user, ${(e as Error).message}`);
    }
  };
