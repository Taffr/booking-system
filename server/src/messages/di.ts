import { db } from '../db'
import { createMessageControllerFactory, getMessagesControllerFactory, deleteMessageControllerFactory, updateMessageControllerFactory } from './controllers'
import { createMessageFactory, deleteMessageForSenderFactory, getMessagesForUserFactory, updateMessageForSenderFactor } from './model'

export const createMessage = createMessageFactory(db)
export const getMessagesForUser = getMessagesForUserFactory(db)
export const deleteMessageForSender = deleteMessageForSenderFactory(db)
export const updateMesssageForSender = updateMessageForSenderFactor(db)

import { uuid } from '../auth'
export const getMessagesForUserController = getMessagesControllerFactory(getMessagesForUser)
export const createMessageController = createMessageControllerFactory(createMessage, uuid)
export const deleteMessageController = deleteMessageControllerFactory(deleteMessageForSender)
export const updateMessageController = updateMessageControllerFactory(updateMesssageForSender)
