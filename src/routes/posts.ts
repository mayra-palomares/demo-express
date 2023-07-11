import express from 'express'
import * as postService from './../services/PostService'
import { toNewPost } from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  const posts = postService.getPosts()
  res.send(posts)
})

router.get('/:id', (req, res) => {
  const post = postService.getPostById(+req.params.id)
  return (post != null)
    ? res.send(post)
    : res.status(404)
})

router.post('/', (req, res) => {
  try {
    const request = toNewPost(req.body)
    const newPost = postService.addPost(request)
    return res.send(newPost)
  } catch (e: any) {
    console.log('Error: ', e)
    return res.status(400).send(e.message)
  }
})

export default router
