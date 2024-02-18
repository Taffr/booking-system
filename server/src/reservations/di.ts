import { db } from '../db'
import { getReservationsForPropertyIdFactory } from './model'
import { getReservationsControllerFactory } from './controllers'

export const getReservationForPropertyId = getReservationsForPropertyIdFactory(db)
export const getReservationsController = getReservationsControllerFactory(getReservationForPropertyId)
