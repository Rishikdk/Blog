const express = require("express")
const database = require("./connect")
const objectId = require("mongodb").ObjectId

let postRoutes = express.Router()

//#1 - Retrive ALL
//http://localhost:3000/posts
postRoutes.route("/posts").get(async (request, response) =>{
    let db=database.getDb()
    let data= await db.collection("posts").find({}).toArray()
    if(data.length > 0){
        response.json(data)
    }
    else{
        throw new Error("Data was not found :(")
    }
})
//#2 - Retrieve one
//http://localhost:3000/posts/1234
postRoutes.route("/posts/:id").get(async (request, response) =>{
    let db=database.getDb()
    let data= await db.collection("posts").findOne({_id: new ObjectID(request.params.id)})
    if(Object.keys(data).length > 0){
        response.json(data)
    }
    else{
        throw new Error("Data was not found :(")
    }
})
//#3 - create one
postRoutes.route("/posts").post(async (request, response) =>{
    let db=database.getDb()
    let mongoObject= {
        titleL:request.body.title,
        description:request.body.description,
        contain:request.body.contain,
        dataCreated:request.body.dataCreated

    }
    let data= await db.collection("posts").insertOne(mongoObject)
response.json(data)
})
//#4 - Update one
postRoutes.route("/posts/:id").put(async (request, response) =>{
    let db=database.getDb()
    let mongoObject= {
        $set: {
            titleL:request.body.title,
            description:request.body.description,
            contain:request.body.contain,
            dataCreated:request.body.dataCreated
        }
   

    }
    let data= await db.collection("posts").updateOne({_id: new ObjectId(request.params.id)},mongoObject)
response.json(data)
})
//#5 - Delete One
postRoutes.route("/posts/:id").delete(async (request, response) =>{
    let db=database.getDb()
    let data= await db.collection("posts").deleteOne({_id: new ObjectID(request.params.id)})
 response.json(data)
})

module.exports = postRoutes
//#
