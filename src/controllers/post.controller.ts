import { Request, Response } from 'express'
import * as PostService from '../services/post.service'

export const getPosts = (_req: Request, res: Response): Response => {
  const posts = PostService.getPosts()
  return res.send(posts)
}

export const getPost = (req: Request, res: Response): Response => {
  const post = PostService.getPostById(+req.params.id)
  return (post != null)
    ? res.send(post)
    : res.status(404)
}

export const addPost = (req: Request, res: Response): Response => {
  try {
    const request = req.body
    const newPost = PostService.addPost(request)
    return res.send(newPost)
  } catch (e: any) {
    return res.status(400).send(e.message)
  }
}
