export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>
export type RequiredId<T extends { id?: string }> = WithRequired<T, 'id'>
