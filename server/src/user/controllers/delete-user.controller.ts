import type { Response } from 'express'
import type { DeleteUser } from '../model'
import type { DeleteUserInput } from './schemas/delete-user.schema'
import type { WithUser } from '../../auth'
import type {ValidatedRequest} from '../../validation'

export const deleteUserControllerFactory = (
    deleteUser: DeleteUser
) => {
    return async (req: ValidatedRequest<DeleteUserInput>, res: Response) => {
        const { id } = req.params
        const { user } = req as WithUser<ValidatedRequest<DeleteUserInput>>

        if (user.id !== id) {
            return res.status(403).json({ message: 'Unauthorized' })
        }

        const result = await deleteUser(id)

        if (!result.isOk) {
            return res.status(500).json({ message: result.error })
        }
        res.status(204).send()
    }
}
