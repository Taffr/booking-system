import { z } from "zod";

export const DeleteReservationSchema = z.object({
  params: z.object({
    reservationId: z.string(),
  }),
});

export type DeleteReservationInput = z.infer<typeof DeleteReservationSchema>;
