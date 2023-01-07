import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Response } from "../../../src/types/response";
import { SuccessMessages } from "../constants/messages";

export default async function handler(
  {}: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    await prisma.post.deleteMany();

    return res.status(200).json({ message: SuccessMessages.postsDeleted });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}
