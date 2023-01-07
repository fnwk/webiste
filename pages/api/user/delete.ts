import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Response } from "../../../src/types/Response";
import { ErrorsMessages, SuccessMessages } from "./../constants/messages";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: { id: string };
}

export default async function handler(
  { body: { id } }: ExtendedNextApiRequest,
  res: NextApiResponse<Response>
) {
  const isBodyValid = id !== null;

  if (!isBodyValid) {
    res.status(400).send({ message: ErrorsMessages.body });
  }

  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: SuccessMessages.userDeleted });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}
