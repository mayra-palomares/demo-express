import express from 'express'
import configureSwagger from './swagger/configureSwagger'
import connectDB from './db/Mongo.database'
import ErrorHandler from './middlewares/ErrorHandler'
import InvalidPath from './middlewares/InvalidPath'
import tasksRouter from './routes/Task.router'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

connectDB()

app.use('/api/tasks', tasksRouter)

configureSwagger(app)

app.use(InvalidPath)
app.use(ErrorHandler)

export default app
