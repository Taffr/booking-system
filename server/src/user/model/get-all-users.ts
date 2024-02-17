import { Connection } from '../../db';

export type GetAllUsers = ReturnType<typeof getAllUserFactory>;
export const getAllUserFactory = (db: Connection) => {
    return async () => {
        return db.selectFrom('users').selectAll().execute();
    };

}
