import type { Response } from 'express'
import type { ValidatedRequest } from '../../validation'
import type { DeleteMessageInput } from './schemas'
import type { WithUser } from '../../auth'
import {DeleteMessageForSender} from '../model'

export const deleteMessageControllerFactory = (
    deleteMessageForSender: DeleteMessageForSender,
) => {
    return async (req: ValidatedRequest<DeleteMessageInput>, res: Response) => {
        const {
            params: { messageId },
            user: { id: userId },
        } = req as WithUser<ValidatedRequest<DeleteMessageInput>>

        const result = await deleteMessageForSender({ userId, messageId })
        if (!result.isOk) {
            return res.status(403).send({})
        }

        res.status(204).send({})
    }
}
