import { checkSchema } from 'express-validator'

export const postValidator = checkSchema({
  title: {
    notEmpty: true,
    isString: true,
    errorMessage: 'Incorrect or missing title'
  },
  body: {
    notEmpty: true,
    isString: true,
    errorMessage: 'Incorrect or missing body'
  },
  userId: {
    notEmpty: true,
    isInt: true
  },
  tags: {
    isArray: true
  }
})
