import { z } from 'zod';

export const AddPropertySchema = z.object({
    body: z.object({
        name: z.string(),
    }),
});

export type AddPropertyInput = z.infer<typeof AddPropertySchema>;
