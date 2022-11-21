import type { NextApiRequest, NextApiResponse } from 'next'
import PocketBase from 'pocketbase';
import { Response } from '../../src/types/Response';

const client = new PocketBase('http://127.0.0.1:8090');

interface ExtendedNextApiRequest extends NextApiRequest {
  body: { id: string};
}

export default async function handler(
  { body }: ExtendedNextApiRequest,
  res: NextApiResponse<Response>
) {
  const isBodyValid = body && body.id;

  if (!isBodyValid) {
    res.status(400).send({ message: 'Invalid body' })
  }

  try {
    await client.admins.authViaEmail('szymon.rybczak@gmail.com', 'Trudnehaslo123!');
    await client.records.delete('posts', body.id);

    return res.status(200).json({ message: 'Post successfully deleted!' })
  } catch(error) {
    res.status(404).send({ message: error })
  }
}