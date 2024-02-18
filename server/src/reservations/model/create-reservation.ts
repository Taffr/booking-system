import type { Connection, NewReservation } from '../../db'
import { Result } from '../../util'

export type CreateReservation = ReturnType<typeof createReservationFactory>
export const createReservationFactory = (
    db: Connection
) => {
    return async (newRes: NewReservation) => {
        try {
            await db
                .insertInto('reservations')
                .values(newRes)
                .execute()
            return Result.ok(newRes.id)
        } catch (e) {
            return Result.fail(`Failed to create reservation ${(e as Error).message}`)
        }
    }
}

