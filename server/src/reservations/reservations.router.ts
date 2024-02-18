import { Router } from 'express'
import { getReservationsController, checkInController, createReservationController, deleteReservationController } from './di'
import { GetReservationsSchema, CheckInSchema, CreateReservationSchema, DeleteReservationSchema } from './controllers'
import { userGuard } from '../auth'
import { validateRequest } from '../validation'

const router = Router()
/**
 * Gets all reservations for a property
 * @param propertyId, the id of the property
 */
router.get('/:propertyId', validateRequest(GetReservationsSchema), getReservationsController)

/**
 * Checks in to a reservation
 * @param propertyId, the id of the property
 */
router.put('/check-in/:reservationId', [ validateRequest(CheckInSchema), userGuard ], checkInController)

/**
 * Creates a reservation, takes a request body with the reservation details, see create-reservation.schema.ts
 * @param propertyId, the id of the property
 */
router.post('/:propertyId', [ validateRequest(CreateReservationSchema), userGuard ], createReservationController)
/**
 * Deletes a reservation
 * @param reservationId, the id of the reservation
 */
router.delete('/:reservationId', [ validateRequest(DeleteReservationSchema), userGuard ], deleteReservationController)
// router.put('/:id', updateReservation);

export const reservationsRouter = router
export const RESERVATIONS_ROUTE = '/reservations'
