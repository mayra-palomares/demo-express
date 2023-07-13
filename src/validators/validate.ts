import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const validate = (req: Request, res: Response, next: Function): Response => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  return res.status(400).json({
    errors: errors.array()
  })
}
