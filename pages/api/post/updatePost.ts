import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { UpdatePostBody } from "../../../src/types/posts";
import { SuccessMessages } from "./../constants/messages";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: UpdatePostBody;
}

export default async function handler(
  { body: { id, title, content, published }, method }: ExtendedNextApiRequest,
  res: NextApiResponse<{ message: unknown }>
) {
  if (method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const isBodyValid = id && title && content;

  if (!isBodyValid) {
    res.status(400).send({ message: "Invalid body" });
  }

  try {
    await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        published,
      },
    });

    return res.status(200).json({ message: SuccessMessages.postUpdated });
  } catch (e) {
    res.status(500).send({ message: e });
  }
}
