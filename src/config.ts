import dotenv from 'dotenv'

dotenv.config()
const config = {
  port: process.env.PORT != null ? +process.env.PORT : 3000,
  dbUrl: process.env.DB_CONNECTION_URL ?? ''
}

export default config