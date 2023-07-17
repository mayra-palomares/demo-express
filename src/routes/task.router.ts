import express from 'express'
import * as TaskController from '../controllers/Task.controller'
import validate, { validateID } from '../validators/validate'
import taskValidator from '../validators/Task.validator'

const router = express.Router()

router.get('/', TaskController.getTasks)
router.get('/:id', validateID, validate, TaskController.getTask)
router.post('/', taskValidator, validate, TaskController.addTask)
router.post('/:id/complete', validateID, validate, TaskController.completeTask)
router.put('/:id', validateID, validate, TaskController.updateTask)

export default router
