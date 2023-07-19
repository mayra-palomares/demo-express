import express, { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJson from './swagger.json'
import swaggerSpec from './SwaggerSpec'
import Config from '../config'

export const configureSwaggerWithJSON = (app: Application): void => {
  const processedSwagger = JSON.stringify(swaggerJson).replace('{{API_BASE_URL}}', Config.apiUrl)
  app.use('/', express.static('node_modules/swagger-ui-dist/', { index: false }), swaggerUi.serve, swaggerUi.setup(JSON.parse(processedSwagger)))
}

export const configureSwaggerWithSpecs = (app: Application): void => {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

export default configureSwaggerWithJSON
