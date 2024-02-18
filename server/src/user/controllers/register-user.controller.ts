import type { Request, Response } from 'express'
import type { HashFunction, MakeUuid } from '../../auth'
import type { AddUser } from '../model'


export type RegisterUserController = ReturnType<typeof registerUserControllerFactory>
export const registerUserControllerFactory = (
    hash: HashFunction,
    uuid: MakeUuid,
    addUser: AddUser
) => {
    return async (req: Request, res: Response) => {
        const { name, phone, password } = req.body
        const h = await hash(password, 10)
        const id = uuid(password)

        try {
            const user = await addUser({
                id,
                name,
                phone,
                hash: h,
            })
            res.status(201).json(user)
        } catch (e) {
            return res.status(500).json({ message: 'Could not add user' })
        }
    };
}
