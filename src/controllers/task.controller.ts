import { Request, Response } from 'express'
import * as TaskService from '../services/Task.service'

export const getTasks = (_req: Request, res: Response): void => {
  TaskService.getTasks().then(tasks => {
    res.send(tasks)
  }).catch(err => console.error(err))
}

export const getTask = (req: Request, res: Response): void => {
  TaskService.getTaskById(+req.params.id).then(task => {
    res.send(task)
  }).catch(err => console.error(err))
}

export const addTask = (req: Request, res: Response): void => {
  TaskService.addTask(req.body).then(task => {
    res.send(task)
  }).catch(err => console.error(err))
}

export const completeTask = (req: Request, res: Response): void => {
  const task = TaskService.completeTask(+req.params.id)
  res.send(task)
}

export const updateTask = (_req: Request, res: Response): void => {
  // const task = TaskService.updateTask(+req.params.id, req.body)
  res.send({})
}
