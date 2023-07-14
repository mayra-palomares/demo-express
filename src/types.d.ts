export interface Task {
  id: number
  title: string
  description: string
  tags: string[]
  completed: boolean
}

export type CreateTaskRequest = Omit<Task, 'id' | 'completed'>
