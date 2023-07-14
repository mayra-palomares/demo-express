import express from 'express'
import tasksRouter from './routes/task.router'
import ErrorHandler from './middlewares/ErrorHandler'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

app.use('/api/tasks', tasksRouter)

app.use(ErrorHandler)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
