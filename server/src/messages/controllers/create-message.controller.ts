import type { Response } from "express";
import type { ValidatedRequest } from "../../validation";
import type { CreateMessageInput } from "./schemas";
import type { CreateMessage } from "../model";
import type { MakeUuid, WithUser } from "../../auth";

export const createMessageControllerFactory = (
  createMessage: CreateMessage,
  uuid: MakeUuid,
) => {
  /**
   * There should probably be a check that the user is not allowed to send a message to themselves, but I am not going to invent buisness requiremnts.
   */
  return async (req: ValidatedRequest<CreateMessageInput>, res: Response) => {
    const {
      body: { to, message },
      user: { id: userId },
    } = req as WithUser<ValidatedRequest<CreateMessageInput>>;

    const newMessage = {
      id: uuid(),
      to_id: to,
      from_id: userId,
      message,
    };

    const result = await createMessage(newMessage);
    if (!result.isOk) {
      return res.status(400).send({});
    }
    res.status(201).send({ id: newMessage.id });
  };
};
