import type { Response } from 'express'
import type { UpdateUser } from '../model'
import type { ValidatedRequest} from '../../validation'
import type { UpdateUserInput } from './schemas/update-user.schema'

export const updateUserControllerFactory = (
    updateUser: UpdateUser
) => async (req: ValidatedRequest<UpdateUserInput>, res: Response) => {
    const { id } = req.params
    const { body } = req

    const user = await updateUser({ id, ...body })

    if (!user.isOk) {
        return res.status(400).json({ message: user.error })
    }

    return res.status(200).json({ message: 'User updated' })
}
