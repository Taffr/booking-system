import { Database } from './types/database.type';
import { PostgresDialect, Kysely } from 'kysely';
import { Pool } from 'pg';

// TODO: Replace constant values with environment variables
const CREATE_CONNECTION_POOL_PARAMS = {
    database: 'bookingdb',
    user: 'user',
    password: 'supersecretpassword',
    host: 'postgres',
    port: 5432,
} as const;

export const dbFactory = () => new Kysely<Database>({
    dialect: new PostgresDialect({
        pool: new Pool(CREATE_CONNECTION_POOL_PARAMS)
    })
});

export type Connection = ReturnType<typeof dbFactory>;
