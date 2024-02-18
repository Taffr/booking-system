import type { Connection, NewMessage } from '../../db'
import { Result } from '../../util'

export type CreateMessage = ReturnType<typeof createMessageFactory>
export const createMessageFactory = (
    db: Connection
) => {
    return async (newMessage: NewMessage) => {
        try {
            const message = await db
                .insertInto('messages')
                .values(newMessage)
                .execute()

            return Result.ok(message)
        }
        catch (error) {
            return Result.fail('Failed to create message.')
        }
    }
}
