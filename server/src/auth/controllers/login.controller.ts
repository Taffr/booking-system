import { Response } from 'express'
import { ValidatedRequest } from '../../validation'
import { LoginInput } from './schemas/login.schema'
import { GetUserByPhone } from '../../user/model/get-user-by-phone'
import { HashCompare, SignJWT } from '..'

export const loginControllerFactory = (
    compare: HashCompare,
    sign: SignJWT,
    getUserByPhone: GetUserByPhone
) => {
    return async (req: ValidatedRequest<LoginInput>, res: Response) => {
        const { phone, password } = req.body
        const user = await getUserByPhone(phone)

        if (!user.isOk) {
            return res.status(401).json({ message: user.error })
        }
        
        const { data: { hash, ...rest } } = user
        const equals = await compare(password, hash)

        if (!equals) {
            return res.status(401).json({ message: 'Invalid password' })
        }

        const token = sign({ rest })

        return res.status(200).json({ token })
    }
}
