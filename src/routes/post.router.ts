import express from 'express'
import * as PostController from './../controllers/post.controller'
import { validate } from '../validators/validate'
import { postValidator } from '../validators/post.validator'

const router = express.Router()

router.get('/', PostController.getPosts)

router.get('/:id', PostController.getPost)

router.post('/', postValidator, validate, PostController.addPost)

export default router
