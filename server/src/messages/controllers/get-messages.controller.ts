import type { Response, Request } from 'express'
import type { WithUser } from '../../auth'
import type { GetMessagesForUser } from '../model'

export const getMessagesControllerFactory = (
    getMessages: GetMessagesForUser
) => {
    return async (req: Request, res: Response) => {
        const { user: { id } } = req as WithUser<Request>
        const messages = await getMessages(id)
        res.json(messages)
    }
}
