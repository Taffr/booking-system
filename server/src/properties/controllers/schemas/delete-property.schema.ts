import { z } from "zod";

export const DeletePropertySchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export type DeletePropertyInput = z.infer<typeof DeletePropertySchema>;
