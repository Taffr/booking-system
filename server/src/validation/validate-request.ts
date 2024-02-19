import { NextFunction, Request, Response } from "express";
import type { AnyZodObject, ZodError } from "zod";

export const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      const parseErrors = (error as ZodError).errors;
      res.status(400).send(parseErrors);
    }
  };
};
