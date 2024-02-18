import type { Connection } from '../../db'
import { Result } from '../../util'

export type CheckInToReservation = ReturnType<typeof checkInToReservationFactory>
export const checkInToReservationFactory = (
    db: Connection
) => {
    return async ({reservationId, userId }: { reservationId: string, userId: string }): Promise<Result<void>> => {
        try {
            await db
                .updateTable('reservations')
                .set({ checked_in: true })
                .where('id', '=', reservationId)
                .where('renter_id', '=', userId)
                .execute()
            return Result.ok(undefined)
        } catch (e) {
            return Result.fail(`Failed to check in to reservation ${(e as Error).message}`)
        }
    }
}
