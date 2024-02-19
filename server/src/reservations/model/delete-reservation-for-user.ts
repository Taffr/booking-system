import type { Connection } from "../../db";
import { Result } from "../../util";

export type DeleteReservationForUser = ReturnType<
  typeof deleteReservationForUserFactory
>;
export const deleteReservationForUserFactory = (db: Connection) => {
  return async ({
    userId,
    reservationId,
  }: {
    userId: string;
    reservationId: string;
  }) => {
    try {
      const hasReservation = await db
        .selectFrom("reservations")
        .select("id")
        .where("id", "=", reservationId)
        .where("renter_id", "=", userId)
        .executeTakeFirst();

      if (!hasReservation) {
        return Result.fail("Reservation not found");
      }

      await db
        .deleteFrom("reservations")
        .where("id", "=", reservationId)
        .where("renter_id", "=", userId)
        .execute();

      return Result.ok(reservationId);
    } catch (e) {
      return Result.fail(
        `Failed to delete reservation ${(e as Error).message}`,
      );
    }
  };
};
