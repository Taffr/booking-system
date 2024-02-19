import { z } from "zod";

export const GetReservationsSchema = z.object({
  params: z.object({
    propertyId: z.string(),
  }),
});

export type GetReservationsInput = z.infer<typeof GetReservationsSchema>;
