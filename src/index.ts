import express from 'express'
import tasksRouter from './routes/Task.router'
import ErrorHandler from './middlewares/ErrorHandler'
import connectDB from './db/Mongo.database'
import Config from './config'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

connectDB()

app.use('/api/tasks', tasksRouter)

app.use(ErrorHandler)

const PORT = Config.port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT.toString()}`)
})
