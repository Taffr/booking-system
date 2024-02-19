import { z } from "zod";

const dateFormat = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
export const CreateReservationSchema = z.object({
  body: z.object({
    startDate: dateFormat,
    endDate: dateFormat,
  }),
  params: z.object({
    propertyId: z.string(),
  }),
});

export type CreateReservationInput = z.infer<typeof CreateReservationSchema>;
