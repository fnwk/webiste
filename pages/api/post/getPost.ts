import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Post } from "../../../src/types/posts";
import { Response } from "../../../src/types/response";
import { SuccessMessages } from "../constants/messages";

export default async function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<Post[] | Response>
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.id === id) {
      return res.status(200).json(post);
    }

    return res.status(404).send({ message: SuccessMessages.postNotFound });
  } catch (e) {
    return res.status(404).send({ message: SuccessMessages.postNotFound });
  }
}
