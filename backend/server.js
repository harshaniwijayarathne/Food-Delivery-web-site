import express from "express";
import cors from "cors";



//app config
const app = express()
const port = 4000

//middleware
app.use(express.jason())
app.use(cors())