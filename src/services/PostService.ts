import { CreatePostRequest, Post } from '../types'
import postData from './../mocks/posts.json'

const posts: Post[] = postData.posts

export const getPosts = (): Post[] => posts

export const addPost = (request: CreatePostRequest): Post => {
  const newPost: Post = {
    id: posts.length + 1,
    ...request,
    reactions: 0
  }

  posts.push(newPost)

  return newPost
}

export const getPostById = (id: number): Post | undefined => {
  return posts.find(p => p.id === id)
}
