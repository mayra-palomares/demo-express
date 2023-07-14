import { checkSchema } from 'express-validator'

export const postValidator = checkSchema({
  title: {
    notEmpty: true,
    isString: true,
    errorMessage: 'Incorrect or missing title'
  },
  description: {
    notEmpty: true,
    isString: true,
    errorMessage: 'Incorrect or missing description'
  },
  tags: {
    isArray: true,
    errorMessage: 'Incorrect or missing body'
  }
})
