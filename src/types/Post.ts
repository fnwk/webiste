export type Post =  {
  id: string;
  author: string;
  title: string;
  description: string;
  created: string;
  updated: string
}

export type CreatePostBody = Omit<Post, 'id' | 'created' | 'updated'>
export type UpdatePostBody = Omit<Post, 'created' | 'updated'>