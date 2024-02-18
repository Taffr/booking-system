import { z } from 'zod'

export const UpdateMessageSchema = z.object({
    body: z.object({
        message: z.string(),
    }),
    params: z.object({
        messageId: z.string(),
    }),
})
export type UpdateMessageInput = z.infer<typeof UpdateMessageSchema>
