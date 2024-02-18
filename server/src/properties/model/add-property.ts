import type { Connection, NewProperty } from "../../db"

export type AddProperty = ReturnType<typeof addPropertyFactory>;
export const addPropertyFactory = (
    db: Connection
) => {
    return async (property: NewProperty): Promise<void> => {
        try {
            await db.insertInto('properties').values(property).execute()
        } catch (e) {
            throw new Error('Failed to add property');
        }
    }
}
