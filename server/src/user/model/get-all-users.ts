import type { Connection } from '../../db';

export type GetAllUsers = ReturnType<typeof getAllUserFactory>;
export const getAllUserFactory = (db: Connection) => {
    return async () => {
        try {
            return await db.selectFrom('users').selectAll().execute()
        } catch (e) {
            throw new Error('Failed to retrieve users');
        }
    }
}
