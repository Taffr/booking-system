import type { Response } from "express";
import type { UpdatePropertyForUser } from "../model";
import type { ValidatedRequest } from "../../validation";
import type { UpdatePropertyInput } from "./schemas";
import type { WithUser } from "../../auth";

export const updatePropertyControllerFactory = (
  updatePropertyForUser: UpdatePropertyForUser,
) => {
  return async (req: ValidatedRequest<UpdatePropertyInput>, res: Response) => {
    try {
      const {
        user,
        params: { id },
        body: { name },
      } = req as WithUser<ValidatedRequest<UpdatePropertyInput>>;
      const result = await updatePropertyForUser({
        propertyId: id,
        userId: user.id,
        name,
      });
      if (!result.isOk) {
        return res.status(403).json({ error: result.error });
      }

      res.status(200).json({ id });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
};
