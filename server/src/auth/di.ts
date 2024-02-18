import { loginControllerFactory } from './controllers/login.controller'
import { getUserByPhone } from '../user/di'
import { hash as bHash, compare as bCompare } from 'bcrypt'
import { v4 } from 'uuid'
import * as jwt from 'jsonwebtoken'

export type HashFunction = typeof bHash
export type HashCompare = typeof compare
export const hash = bHash
export const compare = bCompare
export const sign = (a: Object) => {
    return jwt.sign(a, 'supersecret', { expiresIn: '1h' }) // TODO: Should be in env, and stored somewhere safe.
}
export type SignJWT = typeof sign
export type MakeUuid = typeof v4
export const uuid = v4

export const loginController = loginControllerFactory(
    compare,
    sign,
    getUserByPhone
)
