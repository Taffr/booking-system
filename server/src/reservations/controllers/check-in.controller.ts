import type { Response } from 'express'
import type { ValidatedRequest } from '../../validation'
import type { CheckInToReservation } from '../model'
import {CheckInInput} from './schemas/check-in.schema'
import {WithUser} from '../../auth'

export const checkInControllerFactory = (
    checkInToReservation: CheckInToReservation
) => {
    return async (req : ValidatedRequest<CheckInInput>, res: Response) => {
        const { 
            user,
            params: { reservationId },
        } = req as WithUser<ValidatedRequest<CheckInInput>>

        const reservation = await checkInToReservation({ reservationId, userId: user.id })
        if (!reservation.isOk) {
            res.status(404).json({ error: { messsage: 'Reservation not found' } })
            return
        }
        res.json({ id: reservationId, checked_in: true })
    }
}
