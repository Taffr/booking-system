type Ok<T> = {
  isOk: true;
  data: T;
};

type Fail = {
  isOk: false;
  error: string;
};

export type Result<T> = Ok<T> | Fail;

export const Result = {
  ok: <T>(data: T): Ok<T> => {
    return {
      isOk: true,
      data,
    } as const;
  },
  fail: (error: string): Fail => {
    return {
      isOk: false,
      error,
    } as const;
  },
};
