import { Connection, NewUser } from '../../db'


export type AddUser = ReturnType<typeof addUserFactory>
export const addUserFactory = (
    db: Connection
) => {
    return async (newUser: NewUser): Promise<void> => {
        try {
            await db.insertInto('users').values(newUser).execute()
        } catch (e) {
            throw new Error('Could not add user')
        }
    }
}
