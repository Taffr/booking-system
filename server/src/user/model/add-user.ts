import { Connection, NewUser } from '../../db'


export type AddUser = ReturnType<typeof addUserFactory>
export const addUserFactory = (
    db: Connection
) => {
    return async (newUser: NewUser): Promise<void> => {
        try {
            console.log(newUser)
            await db.insertInto('users').values(newUser).execute()
        } catch (e) {
            console.log(e)
            throw new Error('Could not add user')
        }
    }
}
