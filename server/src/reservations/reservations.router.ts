import { Router } from 'express'
import { getReservationsController, checkInController } from './di'
import { GetReservationsSchema, CheckInSchema } from './controllers'
import { userGuard } from '../auth'
import { validatedRequest } from '../../validation'

const router = Router()
/**
 * Gets all reservations for a property
 * @param propertyId, the id of the property
 */
router.get('/:propertyId', validatedRequest(GetReservationsSchema), getReservationsController)
/**
 * Checks in to a reservation
 * @param propertyId, the id of the property
 */
router.put('/check-in/:reservationId', [ validatedRequest(CheckInSchema), userGuard ], checkInController)
router.post('/:propertyId', [validatedRequest(CreateReservationSchema), userGuard ], createReservationController)

// router.put('/:id', updateReservation);
// router.delete('/:id', deleteReservation);

export const reservationsRouter = router
export const RESERVATIONS_ROUTE = '/reservations'
