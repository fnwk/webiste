import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Response } from "../../../src/types/Response";
import { CreateUserBody } from "../../../src/types/user";
import { ErrorsMessages, SuccessMessages } from "../constants/messages";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: CreateUserBody;
}

export default async function handler(
  { body }: ExtendedNextApiRequest,
  res: NextApiResponse<Response>
) {
  const { name, email } = body;
  const isBodyValid = body && name && email;

  if (!isBodyValid) {
    res.status(405).send({ message: ErrorsMessages.body });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    if (user.id) {
      return res.status(200).json({ message: SuccessMessages.userCreated });
    }
  } catch (e) {
    res.status(500).send({ message: e });
  }
}
