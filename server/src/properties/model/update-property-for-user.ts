import { Connection } from '../../db'
import { Result } from '../../util'

export type UpdatePropertyForUser = ReturnType<typeof updatePropertyForUserFactory>
export const updatePropertyForUserFactory = (
    db: Connection
) => {
    return async ({ propertyId, name, userId }: { propertyId: string, name: string, userId: string }): Promise<Result<string>> => {
        try {
            await db.updateTable('properties')
                .where('id', '=', propertyId)
                .where('owner_id', '=', userId)
                .set({ name })
                .executeTakeFirst();

            return Result.ok(propertyId);
        } catch (e) {
            return Result.fail(`Failed to update property, ${(e as Error).message}`);
        }
    }
}
