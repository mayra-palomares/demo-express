import express from 'express'
import configureSwagger from './swagger/configureSwagger'
import connectDB from './db/mongo.database'
import ErrorHandler from './middlewares/ErrorHandler'
import InvalidPath from './middlewares/InvalidPath'
import tasksRouter from './routes/task.router'
import * as swaggerDist from 'swagger-ui-dist'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

const pathToSwaggerUi = swaggerDist.absolutePath()
app.use(express.static(pathToSwaggerUi))

connectDB()

app.use('/api/tasks', tasksRouter)

configureSwagger(app)

app.use(InvalidPath)
app.use(ErrorHandler)

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT.toString()}`)
})

export default app
