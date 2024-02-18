import { db } from '../db'
import { getReservationsForPropertyIdFactory, checkInToReservationFactory, createReservationFactory } from './model'
import { getReservationsControllerFactory, checkInControllerFactory, createReservationControllerFactory } from './controllers'

export const checkInToReservation = checkInToReservationFactory(db)
export const getReservationForPropertyId = getReservationsForPropertyIdFactory(db)
export const createReservation = createReservationFactory(db)

import { uuid } from '../auth'
export const createReservationController = createReservationControllerFactory(createReservation, uuid)
export const checkInController = checkInControllerFactory(checkInToReservation)
export const getReservationsController = getReservationsControllerFactory(getReservationForPropertyId)
