import { Connection } from "../../db";
import { Result } from "../../util";

export type DeletePropertyForUser = ReturnType<
  typeof deletePropertyForUserFactory
>;
export const deletePropertyForUserFactory = (db: Connection) => {
  return async ({
    propertyId,
    userId,
  }: {
    propertyId: string;
    userId: string;
  }): Promise<Result<string>> => {
    try {
      await db
        .deleteFrom("properties")
        .where("id", "=", propertyId)
        .where("owner_id", "=", userId)
        .executeTakeFirst();
      return Result.ok(propertyId);
    } catch (e) {
      return Result.fail(`Failed to delete property, ${(e as Error).message}`);
    }
  };
};
