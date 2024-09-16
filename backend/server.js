const connect = require("./connect")
const express = require("express")
const cors = require("cors")

const posts= require("./postRoutes")
const users = require("./userRoutes")

const app = express()
const PORT = process.env.PORT  || 3000

app.use(cors(
    {
        origin: ["https://blog-two-xi-54.vercel.app/"],
        methods:["POST","GET"],
        credentials:true
    }
));


//connect frontend and backend
app.use(cors())
app.use(express.json())
app.use(posts)
app.use(users)
app.get("/",(req,res)=> {
    res.send("hello")
})


// creat a server
app.listen(PORT, ()=>{
    connect.connectToServer()
    console.log(`Server run successfully on Port number ${PORT}`)
})