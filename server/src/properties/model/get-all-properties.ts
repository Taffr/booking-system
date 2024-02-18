import type { Connection, Property } from "../../db"

export type GetAllProperties = ReturnType<typeof getAllPropertiesFactory>;
export const getAllPropertiesFactory = (db: Connection) => {
    return async (): Promise<Property[]> => {
        try {
            return await db.selectFrom('properties').selectAll().execute()
        } catch (e) {
            throw new Error('Failed to retrieve properties');
        }
    }
}
