import type { NextApiRequest, NextApiResponse } from 'next'
import PocketBase from 'pocketbase';
import { Post } from '../../src/types/Post';
import { Response } from '../../src/types/Response';

const client = new PocketBase('http://127.0.0.1:8090');

export default async function handler(
  {}: NextApiRequest,
  res: NextApiResponse<Post[] | Response>
) {
  try {
    await client.admins.authViaEmail('szymon.rybczak@gmail.com', 'Trudnehaslo123!');
    const posts = await client.records.getList('posts', 1, 50) 
  
    res.status(200).json(posts.items.map(({ id, author, description, title, created, updated}) => {
      return {
        id,
        author,
        description,
        title,
        created,
        updated
      }}))
  } catch(e) {
    return res.status(500).send({ message: e })
  }
}
