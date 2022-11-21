import type { NextApiRequest, NextApiResponse } from 'next'
import { CreatePostBody } from '../../src/types/Post';
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

interface ExtendedNextApiRequest extends NextApiRequest {
  body: CreatePostBody;
}

export default async function handler(
  { body }: ExtendedNextApiRequest,
  res: NextApiResponse<{ message: unknown }>
) {
  const isBodyValid = body && body.title && body.description && body.author;

  if (isBodyValid) {
    res.status(405).send({ message: 'Only POST requests allowed' })
  }

  try {
    await client.admins.authViaEmail('szymon.rybczak@gmail.com', 'Trudnehaslo123!');
    await client.records.create('posts', body);
  
    return res.status(200).json({ message: 'Hello' })
  } catch(e) {
    res.status(500).send({ message: e })
  }
}