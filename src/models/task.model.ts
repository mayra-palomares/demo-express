import mongoose from 'mongoose'
import { ITask } from '../types'

const TaskSchema = new mongoose.Schema<ITask>({
  title: { type: String, required: [true, 'Title is missing'], trim: true },
  description: { type: String, required: [true, 'Description is missing'], trim: true },
  tags: [String],
  completed: { type: Boolean, default: false }
})

const Task = mongoose.model<ITask>('Task', TaskSchema)

export default Task
