import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Response } from "../../../src/types/Response";
import { User } from "../../../src/types/user";

export default async function handler(
  {}: NextApiRequest,
  res: NextApiResponse<User[] | Response>
) {
  try {
    const users = await prisma.user.findMany({
      take: 50,
    });

    res.status(200).json(users);
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
