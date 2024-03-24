import dotenv from 'dotenv'
dotenv.config()
import express  from 'express'
import cors from 'cors'


import connectDB from './db/connectdb.js'
import userRoutes from './routes/UserRoutes.js'
const app =express()
const port = process.env.PORT

const DATABSE_URL =process.env.DATABSE_URL
// Cors policy
app.use(cors())

// Database connection
connectDB(DATABSE_URL)

// JSON
app.use(express.json())

// load Routes
app.use('/api/user',userRoutes)

app.listen(port,()=>{
    console.log(`server Running at http://localhost:${port}`)
})