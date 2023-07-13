import express from 'express'
import postsRouter from './routes/post.router'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

const PORT = 3000

app.use('/api/posts', postsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
