import { CreateTaskRequest, ITask } from '../types'
import Task from '../models/task.model'

export const getAll = async (): Promise<ITask[]> => {
  return await Task.find({})
}

export const findById = async (id: string): Promise<ITask | null> => {
  return await Task.findById(id)
}

export const create = async (request: CreateTaskRequest): Promise<ITask> => {
  return await Task.create(request)
}

export const completeTask = async (id: string): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(id, { completed: true }, { new: true })
}

export const update = async (id: string, request: ITask): Promise<ITask | null> => {
  return await Task.findByIdAndUpdate(id, request, { new: true })
}
