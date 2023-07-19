import { Application } from 'express'
import * as swaggerUI from 'swagger-ui-express'
import Config from '../config'
import swaggerJson from './swagger.json'

export const configureSwagger = (app: Application): void => {
  const processedSwagger = JSON.stringify(swaggerJson).replace('{{API_BASE_URL}}', Config.apiUrl)
  app.use('/', swaggerUI.serve, swaggerUI.setup(JSON.parse(processedSwagger)))
}

export default configureSwagger
