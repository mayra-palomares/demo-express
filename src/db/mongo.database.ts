import mongoose from 'mongoose'
import Config from './../config'

const connectToMongoDB = async (): Promise<any> => {
  await mongoose.connect(Config.dbUrl)
}

const connectDB = (): void => {
  connectToMongoDB().then(() => {
    console.log('Connected to MongoDB')
  })
    .catch((error) => {
      console.log('Error connecting to MongoDB:', error.message)
    })
}

export default connectDB
