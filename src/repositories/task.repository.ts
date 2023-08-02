import { CreateTaskRequest, ITask } from '../types'
import Task from '../models/task.model'

export const getAll = async (): Promise<ITask[]> => {
  return await Task.find({ deleted: false })
}

export const findById = async (id: string): Promise<ITask | null> => {
  return await Task.findOne({ _id: id, deleted: false })
}

export const create = async (request: CreateTaskRequest): Promise<ITask> => {
  return await Task.create(request)
}

export const completeTask = async (id: string, completed: boolean): Promise<ITask | null> => {
  return await Task.findOneAndUpdate({ _id: id, deleted: false }, { completed }, { new: true })
}

export const update = async (id: string, request: ITask): Promise<ITask | null> => {
  return await Task.findOneAndUpdate({ _id: id, deleted: false }, request, { new: true })
}

export const deleteTask = async (id: string): Promise<ITask | null> => {
  return await Task.findOneAndUpdate({ _id: id, deleted: false }, { deleted: true }, { new: true })
}
