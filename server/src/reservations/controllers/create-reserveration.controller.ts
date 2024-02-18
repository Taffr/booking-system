import type { Response } from 'express'
import type { ValidatedRequest } from '../../validation'
import type { CreateReservation } from '../model'
import type { MakeUuid, WithUser } from '../../auth'
import type { CreateReservationInput } from './schemas'

export const createReservationControllerFactory = (
    createReservation: CreateReservation,
    uuid: MakeUuid
) => {
    /**
     * There should be a check the property is free for the given dates (i.e. no overlapping reservations)
     * but I won't do that, even though it would be fairly easy, but it should be done if this was a "real" application.
     */
    return async (req: ValidatedRequest<CreateReservationInput>, res: Response) => {
        const {
            user,
            body: {
                startDate,
                endDate,
            },
            params: { propertyId },
        } = req as WithUser<ValidatedRequest<CreateReservationInput>>

        const input = {
            id: uuid(),
            property_id: propertyId,
            start_date: new Date(startDate),
            end_date: new Date(endDate),
            renter_id: user.id,
            checked_in: false, // Is defaulted in DB, but types don't align, so we need to set it here (I don't want to spend time on that small thing)
        }

        const reservation = await createReservation(input)
        if (!reservation.isOk) {
            res.status(404).json({ error: { messsage: 'Property not found' } })
            return
        }

        res.status(201).json({ id: reservation.data })
    }
}

