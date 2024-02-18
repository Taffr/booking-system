import { Router  } from 'express'
import { userGuard } from '../auth'
import { CreateMessageSchema } from './controllers'
import { validateRequest } from '../validation'
import { createMessageController, getMessagesForUserController  } from './di'

const router = Router()
/**
 * Gets all messages for a user
 */
// router.get('/', userGuard, getMessagesForUserController)

/**
 * Creates a new message
 * @param to - the user id of the recipient
 * @param message - the message to send
 * @returns the id of the new message
 * @throws 400 - if the message could not be created, due to the recipient not existing
 * @throws 400 - if the request is invalid
 * @throws 401 - if the user is not authenticated
 */
router.post('/', [ validateRequest(CreateMessageSchema), userGuard ], createMessageController)


/**
 * Gets all messages for a user, where the user is either the sender or the recipient
 * @returns an array of messages
 * @throws 401 - if the user is not authenticated
 */
router.get('/', userGuard, getMessagesForUserController)

export const messagesRouter = router
export const MESSAGES_ROUTE = '/messages'
