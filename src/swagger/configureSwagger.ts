import express, { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJson from './swagger.json'
import swaggerSpec from './SwaggerSpec'
import Config from '../config'
import * as swaggerDist from 'swagger-ui-dist'

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'

export const configureSwaggerWithJSON = (app: Application): void => {
  const processedSwagger = JSON.stringify(swaggerJson).replace('{{API_BASE_URL}}', Config.apiUrl)
  const swaggerDocs = JSON.parse(processedSwagger)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }))
}

export const configureSwaggerWithSpecs = (app: Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

export const configureSwagger = (app: Application): void => {
  const pathToSwaggerUi = swaggerDist.absolutePath()
  app.use(express.static(pathToSwaggerUi))

  configureSwaggerWithJSON(app)
}

export default configureSwagger
