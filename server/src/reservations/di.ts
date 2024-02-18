import { db } from '../db'
import { getReservationsForPropertyIdFactory, checkInToReservationFactory } from './model'
import { getReservationsControllerFactory, checkInControllerFactory } from './controllers'

export const checkInToReservation = checkInToReservationFactory(db)
export const getReservationForPropertyId = getReservationsForPropertyIdFactory(db)

export const checkInController = checkInControllerFactory(checkInToReservation)
export const getReservationsController = getReservationsControllerFactory(getReservationForPropertyId)
