import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/Posts.js'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
const app = express()
dotenv.config()


app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))
app.use(cors())
app.use('/posts',postRoutes)
app.use('/user',userRoutes)


const port = process.env.PORT

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {
 app.listen(port,() => console.log('Server running on port ' + port))
})
.catch(error => console.log(error.message))





