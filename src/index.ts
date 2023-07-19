import express from 'express'
import tasksRouter from './routes/Task.router'
import ErrorHandler from './middlewares/ErrorHandler'
import connectDB from './db/Mongo.database'
import Config from './config'
import InvalidPath from './middlewares/InvalidPath'
import * as swaggerUI from 'swagger-ui-express'
import swaggerDoc from './swagger/swagger.json'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

connectDB()

app.use('/api/tasks', tasksRouter)
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.use(InvalidPath)
app.use(ErrorHandler)

const PORT = Config.port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT.toString()}`)
})
