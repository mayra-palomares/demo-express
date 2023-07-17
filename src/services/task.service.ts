import { CreateTaskRequest, ITask } from '../types'
import Task from '../models/Task.model'

export const getTasks = async (): Promise<ITask[]> => {
  const tasks = await Task.find({})
  return tasks
}

export const getTaskById = async (id: number): Promise<ITask> => {
  const task = await Task.findById(id)
  if (task == null) {
    throw new Error('Task not found')
  }
  return task
}

export const addTask = async (request: CreateTaskRequest): Promise<ITask> => {
  request.completed = false
  const newTask = await Task.create(request)
  if (newTask == null) {
    throw new Error('Task was not created')
  }
  return newTask
}

export const completeTask = async (id: number): Promise<ITask> => {
  const task = await getTaskById(id)
  if (task != null) {
    task.completed = true
  }
  return task
}

/* export const updateTask = (id: number, request: ITask): ITask | undefined => {
  let task = getTaskById(id)
  if (task != null) {
    task = { ...task, ...request }
  }

  return task
} */
