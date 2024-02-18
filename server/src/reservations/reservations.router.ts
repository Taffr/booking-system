import { Router } from 'express'
import { getReservationsController } from './di'

const router = Router()

/**
 * Gets all reservations for a property
 * @param propertyId, the id of the property
 */
router.get('/:propertyId', getReservationsController)
// router.post('/', createReservation);
// router.put('/:id', updateReservation);
// router.delete('/:id', deleteReservation);

export const reservationsRouter = router
export const RESERVATIONS_ROUTE = '/reservations'
