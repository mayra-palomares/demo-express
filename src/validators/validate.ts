import { Request, Response } from 'express'
import { param, validationResult } from 'express-validator'

const validate = (req: Request, res: Response, next: Function): Response => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  return res.status(400).json({
    success: false,
    errors: errors.array()
  })
}

export const validateID = param('id').isMongoId().withMessage('Invalid ID')

export default validate
