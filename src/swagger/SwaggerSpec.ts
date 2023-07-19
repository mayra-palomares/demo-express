import swaggerJsdoc from 'swagger-jsdoc'
import Config from './../config'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Tasks API',
      description: 'API REST for managing tasks built with TypeScript, NodeJS, Express and MongoDB.'
    },
    servers: [
      {
        url: Config.apiUrl
      }
    ]
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts']
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec
