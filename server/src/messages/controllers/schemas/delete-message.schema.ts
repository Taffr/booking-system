import { z } from 'zod'

export const DeleteMessageSchema = z.object({
    params: z.object({
        messageId: z.string(),
    }),
})

export type DeleteMessageInput = z.infer<typeof DeleteMessageSchema>
