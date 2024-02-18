import {Connection, Reservation} from "../../db"
import {Result} from "../../util"

export type GetReservationsForPropertyId = ReturnType<typeof getReservationsForPropertyIdFactory>
export const getReservationsForPropertyIdFactory = (
    db: Connection
) => {
    return async (propertyId: string): Promise<Result<Reservation[]>> => {
        try {
            const reservations = await db
                .selectFrom('reservations')
                .selectAll()
                .where('property_id', '=', propertyId)
                .execute()

            return Result.ok(reservations)
        } catch (e) {
            return Result.fail(`Failed to find reservations ${(e as Error).message}`)
        }
    }
}
