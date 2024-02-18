import type { Response } from 'express'
import type { UpdateUser } from '../model'
import type { ValidatedRequest} from '../../validation'
import type { UpdateUserInput } from './schemas/update-user.schema'
import type { WithUser } from '../../auth/types/with-user.type'

export const updateUserControllerFactory = (
    updateUser: UpdateUser
) => async (req: ValidatedRequest<UpdateUserInput>, res: Response) => {
    const { params: { id }, body, user } = req as WithUser<ValidatedRequest<UpdateUserInput>> // TODO: Should have better typesafety...
    if (user.id !== id) {
        return res.status(403).json({ message: 'Unauthorized' })
    }

    const updateInfo = await updateUser({ id, ...body })

    if (!updateInfo.isOk) {
        return res.status(500).json({ message: updateInfo.error }) // Some other error reason for error.
    }

    return res.status(200).json({ message: 'User updated' })
}
