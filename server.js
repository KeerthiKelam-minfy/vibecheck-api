import express from 'express'
import connectDB from './config/db.js'
import dotenv from "dotenv" 

import authRoutes from './routes/auth.js'
import vibeRoutes from './routes/vibes.js'

const app = express()
app.use(express.json())

dotenv.config()

connectDB()

/*
const sampleVibes = [
    {
        id: 1,
        title: "Tollywood pearls",
        description: "This is a playlist curated for telugu pearls."
    },
    {
        id: 2,
        title: "Top English songs of all time",
        description: "This a playlist having all the top english songs of all time."
    },
    {
        id: 3,
        title: "Koncham clarity koncham reality",
        description: "This is a telugu podcast playlist curated for podcasts with some clarity and some reality"
    }
]
*/

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/vibes', vibeRoutes)

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server blasting off on port ${process.env.PORT}`)
})