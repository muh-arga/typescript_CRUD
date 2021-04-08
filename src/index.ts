import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import {router} from "./router/route"

const app = express()

// dotenv
dotenv.config()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', router)

//connect server
app.listen(process.env.PORT, () => {
    console.log(`connected to port : ${process.env.PORT}`)
})


