import type { Response } from 'express';
import type { MakeUuid, WithUser } from '../../auth';
import type { ValidatedRequest } from '../../validation';
import type { AddProperty } from '../model';
import type { AddPropertyInput } from './schemas/add-property.schema';



export const addPropertyControllerFactory = (
    addProperty: AddProperty,
    uuid: MakeUuid,
) => {
    return async (req: ValidatedRequest<AddPropertyInput>, res: Response) => {
        const { user, body: { name } } = req as WithUser<ValidatedRequest<AddPropertyInput>>;
        const id = uuid()
        try {
            const input = {
                id,
                owner_id: user.id,
                name
            }

            await addProperty(input);
            res.status(201).json({ id });
        } catch (e) {
            res.status(500).json({ error: (e as Error).message });
        }
    };
}
