import { CreatePostRequest } from './types'

const parseString = (field: string, value: any): string => {
  if (typeof value !== 'string') {
    throw new Error(`Incorrect or missing ${field}`)
  }
  return value
}

const parseNumber = (field: string, value: any): number => {
  if (typeof value !== 'number') {
    throw new Error(`Incorrect or missing ${field}`)
  }
  return value
}

const parseTags = (value: any): string[] => {
  if (typeof value !== 'object' || !Array.isArray(value)) {
    throw new Error('Incorrect or missing tags')
  }
  value.forEach(elem => {
    parseString('tags', elem)
  })
  return value
}

export const toNewPost = (object: any): CreatePostRequest => {
  const newPost: CreatePostRequest = {
    title: parseString('title', object.title),
    body: parseString('body', object.body),
    userId: parseNumber('userId', object.userId),
    tags: parseTags(object.tags)
  }
  return newPost
}
