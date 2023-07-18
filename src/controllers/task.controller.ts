import { Request, Response } from 'express'
import * as TaskService from '../services/Task.service'
import asyncWrapper from '../middlewares/AsyncWrapper'

export const getTasks = asyncWrapper(async (_req: Request, res: Response) => {
  const tasks = await TaskService.getTasks()
  res.send(tasks)
})

export const getTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await TaskService.getTaskById(req.params.id)
  res.send(task)
})

export const addTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await TaskService.addTask(req.body)
  res.send(task)
})

export const completeTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await TaskService.completeTask(req.params.id)
  res.send(task)
})

export const updateTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await TaskService.updateTask(req.params.id, req.body)
  res.send(task)
})
