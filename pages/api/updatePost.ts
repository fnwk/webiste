import type { NextApiRequest, NextApiResponse } from 'next'
import {  UpdatePostBody } from '../../src/types/Post';
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

interface ExtendedNextApiRequest extends NextApiRequest {
  body: UpdatePostBody;
}

export default async function handler(
  { body, method }: ExtendedNextApiRequest,
  res: NextApiResponse<{ message: unknown }>
) {
  if (method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const isBodyValid = body && body.id && body.title && body.description && body.author;

  if (!isBodyValid) {
    res.status(400).send({ message: 'Invalid body' })
  }

  try {
    await client.admins.authViaEmail('szymon.rybczak@gmail.com', 'Trudnehaslo123!');
    await client.records.update('posts', body.id, body);
  
    return res.status(200).json({ message: 'Post updated successfully!' })
  } catch(e) {
    res.status(500).send({ message: e })
  }
}