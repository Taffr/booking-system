import { Router  } from 'express'
import { userGuard } from '../auth'
import { CreateMessageSchema, DeleteMessageSchema, UpdateMessageSchema } from './controllers'
import { validateRequest } from '../validation'
import { createMessageController, getMessagesForUserController, deleteMessageController, updateMessageController } from './di'

const router = Router()
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

/**
 * Deletes a message
 * @param messageId - the id of the message to delete
 * @returns the id of the deleted message
 * @throws 400 - if the message could not be updated
 * @throws 401 - if the user is not authenticated
 * @throws 403 - if the user is not the sender of the message
 */
router.delete('/:messageId', [ validateRequest(DeleteMessageSchema), userGuard ], deleteMessageController)

/**
 * Updates a message
 * @param messageId - the id of the message to update
 * @param message - the new message
 * @returns the id of the updated message
 * @throws 400 - if the message could not be updated
 * @throws 401 - if the user is not authenticated
 * @throws 403 - if the user is not the sender of the message
 */
router.put('/:messageId', [ validateRequest(UpdateMessageSchema), userGuard ], updateMessageController)

export const messagesRouter = router
export const MESSAGES_ROUTE = '/messages'
