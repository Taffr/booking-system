import { Connection } from "../../db";
import { Result } from "../../util";

export type DeleteUser = ReturnType<typeof deleteUserFactory>;
export const deleteUserFactory = (db: Connection) => {
  return async (id: string): Promise<Result<string>> => {
    try {
      await db.deleteFrom("users").where("id", "=", id).executeTakeFirst();
      return Result.ok(id);
    } catch (e) {
      return Result.fail(`Failed to delete user, ${(e as Error).message}`);
    }
  };
};
