import { Request } from 'express';

export type ValidatedRequest<T> = (T extends { params: unknown, body: unknown } ? Request<T['params'], {}, T['body']> : (T extends { body: unknown } ? Request<{}, {}, T['body']> : never))
