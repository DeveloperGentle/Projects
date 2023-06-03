import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import projectRoutes from "./routes/Projects.js"
import userRoutes from "./routes/User.js"


const app = express()
dotenv.config()

app.use(bodyParser.json({limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb",extended : true}))
app.use(cors())
app.use('/projects', projectRoutes)
app.use('/user', userRoutes)

const port = process.env.PORT
const connection_url = process.env.CONNECTION_URL

mongoose.connect(connection_url).then(() => { app.listen(port, () => console.log(`Server running on port: ${port}`)) })
.catch((error) => console.log(error))

