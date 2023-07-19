import { CreateTaskRequest, ITask } from '../types'
import * as TaskRepository from '../repositories/task.repository'

export const getTasks = async (): Promise<ITask[]> => {
  const tasks = await TaskRepository.getAll()
  return tasks
}

export const getTaskById = async (id: string): Promise<ITask> => {
  const task = await TaskRepository.findById(id)
  if (task == null) {
    throw new Error('Task not found')
  }
  return task
}

export const addTask = async (request: CreateTaskRequest): Promise<ITask> => {
  const newTask = await TaskRepository.create(request)
  if (newTask == null) {
    throw new Error('Task was not created')
  }
  return newTask
}

export const completeTask = async (id: string): Promise<ITask> => {
  const updatedTask = await TaskRepository.completeTask(id)
  if (updatedTask == null) {
    throw new Error('Task was not completed')
  }
  return updatedTask
}

export const updateTask = async (id: string, request: ITask): Promise<ITask> => {
  const updatedTask = await TaskRepository.update(id, request)
  if (updatedTask == null) {
    throw new Error('Task was not updated')
  }
  return updatedTask
}
