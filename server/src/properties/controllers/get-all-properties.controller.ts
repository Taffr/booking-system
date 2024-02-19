import type { Request, Response } from "express";
import type { GetAllProperties } from "../model";

export type GetAllPropertiesController = ReturnType<
  typeof getAllPropertiesControllerFactory
>;
export const getAllPropertiesControllerFactory = (
  getAllProperties: GetAllProperties,
) => {
  return async (_: Request, res: Response) => {
    try {
      const properties = await getAllProperties();
      res.json(properties);
    } catch (e) {
      res.status(500).json({ message: (e as Error).message });
    }
  };
};
