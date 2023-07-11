import express from 'express'
import postsRouter from './routes/posts'

const app = express()
app.use(express.json()) // middleware to transform req.body to json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Ping!')
  res.send('pong')
})

app.use('/api/posts', postsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
