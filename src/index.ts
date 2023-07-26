import express from 'express'
import configureSwagger from './swagger/configureSwagger'
import connectDB from './db/mongo.database'
import ErrorHandler from './middlewares/ErrorHandler'
import InvalidPath from './middlewares/InvalidPath'
import tasksRouter from './routes/task.router'
import configureCORS from './middlewares/configureCORS'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

configureCORS(app)
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
