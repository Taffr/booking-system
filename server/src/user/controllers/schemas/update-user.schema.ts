import { z } from "zod";

// NOTE: There should also be ability to update the phone, but for the sake of simplicity, we will not include it in this example.
export const UpdateUserSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    password: z.string().optional(),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
