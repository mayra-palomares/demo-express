import dotenv from 'dotenv'

dotenv.config()
const config = {
  dbUrl: process.env.DB_CONNECTION_URL ?? '',
  apiUrl: process.env.API_URL ?? 'http://localhost:3000/api'
}

export default config
