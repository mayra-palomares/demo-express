import express from 'express'
import { postValidator } from '../validators/post.validator'
import * as PostController from './../controllers/post.controller'

const router = express.Router()

router.get('/', PostController.getPosts)

router.get('/:id', PostController.getPost)

router.post('/', postValidator, PostController.addPost)

export default router
