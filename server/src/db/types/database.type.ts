export type Database = {
    users: UsersTable;
}

export type UserPhoneNumber = `+${string}`; // e.g. '+4611223344', could be imporved further. 
type UsersTable = {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: UserPhoneNumber;
}

