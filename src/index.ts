import express from 'express'
import tasksRouter from './routes/task.router'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

const PORT = 3000

app.use('api/tasks', tasksRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
