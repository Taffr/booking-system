import type { Connection } from "../../db";
import { Result } from "../../util";

export type GetMessagesForUser = ReturnType<typeof getMessagesForUserFactory>;
export const getMessagesForUserFactory = (db: Connection) => {
  return async (userId: string) => {
    try {
      const messages = await db
        .selectFrom("messages")
        .selectAll()
        .where((eb) =>
          eb.or([eb("to_id", "=", userId), eb("from_id", "=", userId)]),
        )
        .execute();
      return Result.ok(messages);
    } catch (error) {
      return Result.fail("Failed to get messages.");
    }
  };
};
