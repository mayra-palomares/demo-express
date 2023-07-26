import { Application } from 'express'
import cors from 'cors'

const configureCORS = (app: Application): void => {
  app.use(cors())
}

export default configureCORS
