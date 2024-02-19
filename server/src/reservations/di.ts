import { db } from "../db";
import {
  getReservationsForPropertyIdFactory,
  checkInToReservationFactory,
  createReservationFactory,
  deleteReservationForUserFactory,
} from "./model";
import {
  getReservationsControllerFactory,
  checkInControllerFactory,
  createReservationControllerFactory,
  deleteReservationControllerFactory,
} from "./controllers";
export const checkInToReservation = checkInToReservationFactory(db);
export const getReservationForPropertyId =
  getReservationsForPropertyIdFactory(db);
export const createReservation = createReservationFactory(db);
export const deleteReservationForUser = deleteReservationForUserFactory(db);

import { uuid } from "../auth";
export const createReservationController = createReservationControllerFactory(
  createReservation,
  uuid,
);
export const checkInController = checkInControllerFactory(checkInToReservation);
export const getReservationsController = getReservationsControllerFactory(
  getReservationForPropertyId,
);
export const deleteReservationController = deleteReservationControllerFactory(
  deleteReservationForUser,
);
