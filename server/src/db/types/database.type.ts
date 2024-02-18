import { Selectable, Insertable, Updateable, } from 'kysely'

export type Database = {
    users: UsersTable
    properties: PropertiesTable
    reservations: ReservationsTable
    messages: MessagesTable
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

type ReservationsTable = {
    id: string
    property_id: string
    renter_id: string
    start_date: Date
    end_date: Date
    checked_in: boolean
}

type MessagesTable = {
    id: string
    from_id: string
    to_id: string
    message: string
}

export type User = Selectable<UsersTable>
export type NewUser = Insertable<UsersTable>
export type UpdateableUser = Updateable<UsersTable>

export type Property = Selectable<PropertiesTable>
export type NewProperty = Insertable<PropertiesTable>
export type UpdateableProperty = Updateable<PropertiesTable>

export type Reservation = Selectable<ReservationsTable>
export type NewReservation = Insertable<ReservationsTable>
export type UpdateableReservation = Updateable<ReservationsTable>

export type Message = Selectable<MessagesTable>
export type NewMessage = Insertable<MessagesTable>
export type UpdateableMessage = Updateable<MessagesTable>
