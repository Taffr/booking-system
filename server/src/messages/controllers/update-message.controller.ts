import type { Response } from 'express'
import type { WithUser } from '../../auth'
import type { ValidatedRequest } from '../../validation'
import type { UpdateMessageInput } from './schemas'
import type { UpdateMessageForSender } from '../model'

export const updateMessageControllerFactory = (
    updateMesssageForSender : UpdateMessageForSender,
) => {
    return async (req: ValidatedRequest<UpdateMessageInput>, res: Response) => {
        const {
            user,
            body: { message },
            params: { messageId }
        } = req as WithUser<ValidatedRequest<UpdateMessageInput>>

        const result = await updateMesssageForSender({ senderId: user.id, messageId, newMessage: message })
        if (!result.isOk) {
            return res.status(403).send({ error: { message: 'Not allowed to update message' }})
        }
        res.json({ id: result.data })
    }
}
