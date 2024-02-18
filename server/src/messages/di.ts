import { db } from '../db'
import { createMessageControllerFactory, getMessagesControllerFactory } from './controllers'
import { createMessageFactory, getMessagesForUserFactory } from './model'

export const createMessage = createMessageFactory(db)
export const getMessagesForUser = getMessagesForUserFactory(db)

import { uuid } from '../auth'
export const getMessagesForUserController = getMessagesControllerFactory(getMessagesForUser)
export const createMessageController = createMessageControllerFactory(createMessage, uuid)

