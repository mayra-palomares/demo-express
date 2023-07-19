import { NextFunction, Request, Response } from 'express'

const AsyncWrapper = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).then().catch((err: any) => next(err))
  }
}

export default AsyncWrapper
