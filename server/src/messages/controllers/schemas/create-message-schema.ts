import { z } from "zod";

export const CreateMessageSchema = z.object({
  body: z.object({
    to: z.string(),
    message: z.string(),
  }),
});
export type CreateMessageInput = z.infer<typeof CreateMessageSchema>;
