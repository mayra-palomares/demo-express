import express from 'express'
import * as TaskController from '../controllers/Task.controller'
import validate from '../validators/validate'
import taskValidator from '../validators/Task.validator'

const router = express.Router()

router.get('/', TaskController.getTasks)
router.get('/:id', TaskController.getTask)
router.post('/', taskValidator, validate, TaskController.addTask)
router.post('/:id/complete', TaskController.completeTask)
router.put('/:id', TaskController.updateTask)

export default router
