import { Request, Response } from 'express'
import * as TaskService from '../services/task.service'

export const getTasks = (_req: Request, res: Response): Response => {
  const tasks = TaskService.getTasks()
  return res.send(tasks)
}

export const getTask = (req: Request, res: Response): Response => {
  const task = TaskService.getTaskById(+req.params.id)
  return (task != null)
    ? res.send(task)
    : res.status(404)
}

export const addTask = (req: Request, res: Response): Response => {
  try {
    const newTask = TaskService.addTask(req.body)
    return res.send(newTask)
  } catch (e: any) {
    return res.status(400).send(e.message)
  }
}

export const completeTask = (req: Request, res: Response): Response => {
  const task = TaskService.completeTask(+req.params.id)
  return res.send(task)
}

export const updateTask = (req: Request, res: Response): Response => {
  const task = TaskService.updateTask(+req.params.id, req.body)
  return res.send(task)
}
