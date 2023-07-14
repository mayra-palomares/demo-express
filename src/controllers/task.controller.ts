import { Request, Response } from 'express'
import * as TaskService from '../services/task.service'

export const getTasks = (_req: Request, res: Response): void => {
  const tasks = TaskService.getTasks()
  res.send(tasks)
}

export const getTask = (req: Request, res: Response): void => {
  const task = TaskService.getTaskById(+req.params.id)
  res.send(task)
}

export const addTask = (req: Request, res: Response): void => {
  const newTask = TaskService.addTask(req.body)
  res.send(newTask)
}

export const completeTask = (req: Request, res: Response): void => {
  const task = TaskService.completeTask(+req.params.id)
  res.send(task)
}

export const updateTask = (req: Request, res: Response): void => {
  const task = TaskService.updateTask(+req.params.id, req.body)
  res.send(task)
}
