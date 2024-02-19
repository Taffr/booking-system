import type { Response } from "express";
import type { GetReservationsForPropertyId } from "../model";
import type { ValidatedRequest } from "../../validation";
import type { GetReservationsInput } from "./schemas/get-reservations.schema";

export const getReservationsControllerFactory = (
  getReservationsForPropertyId: GetReservationsForPropertyId,
) => {
  return async (req: ValidatedRequest<GetReservationsInput>, res: Response) => {
    const { propertyId } = req.params;
    const result = await getReservationsForPropertyId(propertyId);
    if (!result.isOk) {
      res.status(500).json({ error: result.error });
      return;
    }
    res.json(result.data);
  };
};
