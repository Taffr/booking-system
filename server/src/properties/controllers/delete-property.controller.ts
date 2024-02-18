

import type { Response } from 'express'
import type { DeletePropertyForUser } from '../model'
import type { DeletePropertyInput } from './schemas/delete-property.schema'
import type { WithUser } from '../../auth'
import type { ValidatedRequest } from '../../validation'



export const deletePropertyControllerFactory = (
    deletePropertyForUser: DeletePropertyForUser
) => {
    return async (req: ValidatedRequest<DeletePropertyInput>, res: Response) => {
        const { id } = req.params
        const { user } = req as WithUser<ValidatedRequest<DeletePropertyInput>>

        const result = await deletePropertyForUser({ propertyId: id, userId: user.id })

        if (!result.isOk) {
            return res.status(403).json({ message: 'Unauthorized' })
        }
        res.status(204).send()
    }
}
