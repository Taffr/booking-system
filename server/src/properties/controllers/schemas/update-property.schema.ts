import { z } from 'zod'

export const UpdatePropertySchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    name: z.string(),
  }),
})

export type UpdatePropertyInput = z.infer<typeof UpdatePropertySchema>
