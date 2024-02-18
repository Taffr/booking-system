import { z } from 'zod';

export const LoginSchema = z.object({
    body: z.object({
        phone: z.string(),
        password: z.string(),
    })
})

export type LoginInput = z.infer<typeof LoginSchema>
