import { Selectable, Insertable, Updateable } from 'kysely'

export type Database = {
    users: UsersTable
    properties: PropertiesTable
}

type UsersTable = {
    id: string
    name: string
    phone: string
    hash: string
}

type PropertiesTable = {
    id: string
    name: string
    owner_id: string
}

export type User = Selectable<UsersTable>
export type NewUser = Insertable<UsersTable>
export type UpdateableUser = Updateable<UsersTable>

export type Property = Selectable<PropertiesTable>
export type NewProperty = Insertable<PropertiesTable>
export type UpdateableProperty = Updateable<PropertiesTable>
