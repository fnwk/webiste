import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { CreatePostBody } from "../../../src/types/posts";
import { Response } from "../../../src/types/response";
import { ErrorsMessages, SuccessMessages } from "../constants/messages";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: CreatePostBody;
}

export default async function handler(
  { body }: ExtendedNextApiRequest,
  res: NextApiResponse<Response>
) {
  const { title, content, id, published } = body;
  const isBodyValid = body && title && content && id;

  if (!isBodyValid) {
    res.status(405).send({ message: ErrorsMessages.body });
  }

  try {
    const user = await prisma.post.create({
      data: {
        title,
        content,
        published,
        author: {
          connect: {
            id,
          },
        },
      },
    });

    if (user.id) {
      return res.status(200).json({ message: SuccessMessages.postCreated });
    }
  } catch (e) {
    res.status(500).send({ message: e });
  }
}
