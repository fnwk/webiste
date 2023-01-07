import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Response } from "../../../src/types/Response";
import { User } from "../../../src/types/user";
import { ErrorsMessages, SuccessMessages } from "../constants/messages";

export default async function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<User | Response>
) {
  if (typeof id !== "string") {
    return res.status(400).send({ message: ErrorsMessages.query });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (user && user.id === id) {
      return res.status(200).json(user);
    }

    return res.status(404).send({ message: SuccessMessages.userNotFound });
  } catch (e) {
    return res.status(404).send({ message: e });
  }
}
