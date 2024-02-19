import type { Response } from "express";
import type { DeleteReservationForUser } from "../model";
import type { ValidatedRequest } from "../../validation";
import type { DeleteReservationInput } from "./schemas";
import type { WithUser } from "../../auth";

export const deleteReservationControllerFactory = (
  deleteReservationForUser: DeleteReservationForUser,
) => {
  return async (
    req: ValidatedRequest<DeleteReservationInput>,
    res: Response,
  ) => {
    const {
      user: { id: userId },
      params: { reservationId },
    } = req as WithUser<ValidatedRequest<DeleteReservationInput>>;

    try {
      const result = await deleteReservationForUser({
        userId,
        reservationId,
      });
      if (!result.isOk) {
        res.status(401).json({ error: result.error });
        return;
      }
      res.status(200).json({ id: result.data });
    } catch (e) {
      res.status(400).json({ message: (e as Error).message });
    }
  };
};
