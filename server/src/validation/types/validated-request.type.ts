import { Request } from 'express';

export type ValidatedRequest<T extends { body: unknown }> = Request<{}, {}, T['body']>
