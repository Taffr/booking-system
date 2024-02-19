import { z } from "zod";

const phoneRegex = /^\+\d{10}$/;
export const RegisterUserSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    phone: z.string().regex(phoneRegex),
    password: z.string().min(8),
  }),
});
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
