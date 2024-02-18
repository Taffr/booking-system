import { dbFactory, } from './connection'
export type { Connection } from './connection'

export const db = dbFactory();
