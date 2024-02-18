import { hash as bHash, compare as bCompare } from 'bcrypt'
import { v4 } from 'uuid'

export type HashFunction = typeof bHash
export type Compare = typeof compare
export const hash = bHash
export const compare = bCompare



export type MakeUuid = typeof v4
export const uuid = v4

