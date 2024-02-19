import type { DecodeToken, ValidateToken } from "../di";
import type { Request, Response, NextFunction } from "express";

export type UserGuard = ReturnType<typeof userGuardFactory>;
export const userGuardFactory = (
  validateJwt: ValidateToken,
  jwtDecode: DecodeToken,
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.headers);
    const token = req.headers.authorization || "";

    if (!token) {
      res.status(401).json({ message: "Missing JWT" });
    }

    const split = token.split("Bearer ")[1];
    const isValid = validateJwt(split);

    if (!isValid) {
      res.status(401).json({ message: "Authentication failed" });
    }

    (req as Record<string, any>).user = jwtDecode(split); // TODO: Fix this type. Left like this due to time constraints.
    next();
  };
};
