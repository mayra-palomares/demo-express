import mongoose from 'mongoose'
import { ITask } from '../types'

const TaskSchema = new mongoose.Schema<ITask>({
  title: String,
  description: String,
  tags: [String],
  completed: Boolean
})

const Task = mongoose.model<ITask>('Task', TaskSchema)

export default Task
