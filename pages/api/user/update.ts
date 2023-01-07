import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { UpdateUserBody } from "../../../src/types/user";
import { SuccessMessages } from "./../constants/messages";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: UpdateUserBody;
}

export default async function handler(
  { body: { id, name, email }, method }: ExtendedNextApiRequest,
  res: NextApiResponse<{ message: unknown }>
) {
  if (method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const isBodyValid = name && email;

  if (!isBodyValid) {
    res.status(400).send({ message: "Invalid body" });
  }

  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });

    return res.status(200).json({ message: SuccessMessages.userUpdated });
  } catch (e) {
    res.status(500).send({ message: e });
  }
}
