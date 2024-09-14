const express = require("express")
const database = require("./connect")
const { ObjectId } = require("mongodb")
const objectId = require("mongodb").ObjectId
const jwt = require("jsonwebtoken")
require("dotenv").config({path:"./config.env"})

let postRoutes = express.Router()

//#1 - Retrive ALL
//http://localhost:3000/posts
postRoutes.route("/posts").get(verifyToken,async (request, response) =>{
    let db=database.getDb()
    let data= await db.collection("posts").find({}).toArray()
    if(data.length > 0){
        response.json(data)
    }
    else{
        throw new Error("Data was not found :(")
    }
})
//#2 - Retrieve one single data
//http://localhost:3000/posts/1234
postRoutes.route("/posts/:id").get(verifyToken,async (request, response) =>{
    let db=database.getDb()
    let data= await db.collection("posts").findOne({_id: new ObjectId(request.params.id)})
    if(Object.keys(data).length > 0){
        response.json(data)
    }
    else{
        throw new Error("Data was not found :(")
    }
})
//#3 - create one
postRoutes.route("/posts").post(verifyToken,async (request, response) =>{
    let db=database.getDb()
    let mongoObject= {
        title:request.body.title,
        description:request.body.description,
        contain:request.body.contain,
        author:request.body.user._id,
        dateCreated:request.body.dateCreated

    }
    let data= await db.collection("posts").insertOne(mongoObject)
response.json(data)
})
//#4 - Update one
postRoutes.route("/posts/:id").put(verifyToken,async (request, response) =>{
    let db=database.getDb()
    let mongoObject= {
        $set: {
            title:request.body.title,
            description:request.body.description,
            contain:request.body.contain,
            author:request.body.author,
            dateCreated:request.body.dataCreated
        }
   

    }
    let data= await db.collection("posts").updateOne({_id: new ObjectId(request.params.id)},mongoObject)
response.json(data)
})
//#5 - Delete One
postRoutes.route("/posts/:id").delete(verifyToken,async (request, response) =>{
    let db=database.getDb()
    let data= await db.collection("posts").deleteOne({_id: new ObjectId(request.params.id)})
 response.json(data)
})

// check the token for access the post update edit 
function verifyToken(request,response,next){
    const authHeaders = request.headers["authorization"]
    const token = authHeaders && authHeaders.split(' ')[1] //take the first index //12345
    if(!token){
        return response.status(401).json({message: "Authenticatiopn token is missing"})
    }
    jwt.verify(token, process.env.SECRETKEY, (error, user)=>{
        if(error){
            //403 don't accept the value of token
            return response.status(403).json({message: "Invalid token!!!"})
        }

        request.body.user = user 
        next()
    })
}

module.exports = postRoutes
//#
