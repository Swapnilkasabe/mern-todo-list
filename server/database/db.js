import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = ()=>{
    const mongoURI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.g7upcpl.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(mongoURI, { useUnifiedTopology: true})
    mongoose.connection.on('connected', ()=>{console.log('Database connected')})
    mongoose.connection.on('disconnected', ()=>{console.log('Database not connected')})
    mongoose.connection.on('error', ()=>{console.log('Error while connecting to database', error.message)})
}

export default Connection;
