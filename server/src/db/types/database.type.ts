import { Selectable, Insertable } from 'kysely'

export type Database = {
    users: UsersTable;
}

type UsersTable = {
    id: string
    name: string
    phone: string
    hash: string
}


export type User = Selectable<UsersTable>
export type NewUser = Insertable<UsersTable>
