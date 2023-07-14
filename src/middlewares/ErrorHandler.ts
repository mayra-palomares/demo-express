import { NextFunction, Request, Response } from 'express'
const errorStatus: number = 400

const ErrorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  const errMsg = err.message ?? 'Something went wrong'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errMsg
  })
}

export default ErrorHandler
