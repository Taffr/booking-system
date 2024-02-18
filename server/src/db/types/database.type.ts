import { Selectable, Insertable } from 'kysely'

export type Database = {
    users: UsersTable;
}

export type UserPhoneNumber = `+${string}`; // e.g. '+4611223344', could be imporved further. 
type UsersTable = {
    id: string
    name: string
    phone: UserPhoneNumber
    hash: string
}


export type User = Selectable<UsersTable>
export type NewUser = Insertable<UsersTable>
