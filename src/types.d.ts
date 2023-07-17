export interface ITask extends Document {
  title: string
  description: string
  tags: string[]
  completed: boolean
}

export type CreateTaskRequest = Pick<ITask, 'title' | 'description' | 'tags' | 'completed'>
