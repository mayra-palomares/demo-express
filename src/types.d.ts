export interface ITask extends Document {
  title: string
  description: string
  tags: string[]
  completed: boolean
  deleted: boolean
}

export type CreateTaskRequest = Pick<ITask, 'title' | 'description' | 'tags'>
