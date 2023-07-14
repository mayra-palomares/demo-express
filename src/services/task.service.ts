import { CreateTaskRequest, Task } from '../types'
import taskData from '../mocks/tasks.json'

const tasks: Task[] = taskData.tasks

export const getTasks = (): Task[] => tasks

export const getTaskById = (id: number): Task | undefined => {
  const task = tasks.find(task => task.id === id)
  if (task == null) {
    throw new Error('Task not found')
  }
  return task
}

export const addTask = (request: CreateTaskRequest): Task => {
  const newTask: Task = {
    id: tasks.length + 1,
    ...request,
    completed: false
  }

  tasks.push(newTask)

  return newTask
}

export const completeTask = (id: number): Task | undefined => {
  const task = getTaskById(id)
  if (task != null) {
    task.completed = true
  }

  return task
}

export const updateTask = (id: number, request: Task): Task | undefined => {
  let task = getTaskById(id)
  if (task != null) {
    task = { ...task, ...request }
  }

  return task
}