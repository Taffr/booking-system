import type { Connection } from '../../db';
import {PublicUser} from '../types';

export type GetAllUsers = ReturnType<typeof getAllUserFactory>;
export const getAllUserFactory = (db: Connection) => {
    return async (): Promise<PublicUser[]> => {
        try {
            return await db.selectFrom('users').select([ 'id', 'name', 'phone' ]).execute()
        } catch (e) {
            throw new Error('Failed to retrieve users');
        }
    }
}
