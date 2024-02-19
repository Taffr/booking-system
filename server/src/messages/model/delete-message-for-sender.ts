import type { Connection } from "../../db";
import { Result } from "../../util";

export type DeleteMessageForSender = ReturnType<
  typeof deleteMessageForSenderFactory
>;
export const deleteMessageForSenderFactory = (db: Connection) => {
  return async ({
    userId,
    messageId,
  }: {
    userId: string;
    messageId: string;
  }) => {
    try {
      await db
        .deleteFrom("messages")
        .where((eb) =>
          eb.and([eb("id", "=", messageId), eb("from_id", "=", userId)]),
        )
        .execute();

      return Result.ok(messageId);
    } catch (error) {
      return Result.fail("Failed to delete message.");
    }
  };
};
