const connect = require("./connect")
const express = require("express")
const cors = require("cors")

const posts= require("./postRoutes")

const app = express()
const PORT = 3000

//connect frontend and backend
app.use(cors())
app.use(express.json())
app.use(posts)

// creat a server
app.listen(PORT, ()=>{
    connect.connectToServer()
    console.log('Server is running on port ${PORT}')
})