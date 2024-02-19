import type { Connection } from "../../db";
import { Result } from "../../util";

export type UpdateMessageForSender = ReturnType<
  typeof updateMessageForSenderFactor
>;
export const updateMessageForSenderFactor = (db: Connection) => {
  return async ({
    senderId,
    messageId,
    newMessage,
  }: {
    senderId: string;
    messageId: string;
    newMessage: string;
  }) => {
    try {
      await db
        .updateTable("messages")
        .set({ message: newMessage })
        .where((eb) =>
          eb.and([eb("id", "=", messageId), eb("from_id", "=", senderId)]),
        )
        .execute();

      return Result.ok(messageId);
    } catch (error) {
      return Result.fail("Failed to update message.");
    }
  };
};
