import { z } from 'zod'
export const CheckInSchema = z.object({
    params: z.object({
        reservationId: z.string(),
    }),
})
export type CheckInInput = z.infer<typeof CheckInSchema>


