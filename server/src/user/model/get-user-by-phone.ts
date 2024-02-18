import { Connection, User } from '../../db'
import { Result } from '../../util'

export type GetUserByPhone = ReturnType<typeof getUserByPhoneFactory>
export const getUserByPhoneFactory = (
    db: Connection
) => {
    return async (phone: string): Promise<Result<User>> => {
        const user = await db.selectFrom('users').selectAll().where('phone', '=', phone).executeTakeFirst()
        if (!user) {
            return Result.fail('User not found');
        }
        return Result.ok(user);
    }
}
