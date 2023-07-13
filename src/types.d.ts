export interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}

export type CreatePostRequest = Omit<Post, 'id' | 'reactions'>
