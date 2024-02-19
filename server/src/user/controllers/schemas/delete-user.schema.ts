import { z } from "zod";

export const DeleteUserSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export type DeleteUserInput = z.infer<typeof DeleteUserSchema>;
