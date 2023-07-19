import { Request, Response } from 'express'

const InvalidPath = (_req: Request, res: Response): Response => res.status(404).send({ success: false, message: 'Page not found' })

export default InvalidPath
