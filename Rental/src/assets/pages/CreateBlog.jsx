import { createPost } from "../../api"
import { useEffect, useState } from "react"
import "./pages.css"


export function CreateBlog(){
const [title, setTitle] =  useState("")
const [description, setDescription] =  useState("")
const [content, setContent] =  useState("")

    async function handleSubmit(){
        let postData={
            title:title, 
            description:description,
            contain:content,
            author:null,
            dateCreated: new Date()

         }
         await createPost(postData)

    }

    return<>
    <form onSubmit={handleSubmit}>
        <div className="Containers_create"> 
        <label>Title</label>
        <input name="Title" className="title" placeholder="Enter your Title" onChange={(e) => setTitle(e.target.value)} maxLength={30} required />
        <label>Description</label>
        <textarea  name="description" placeholder="Enter your Title" onChange={(e) => setDescription(e.target.value)} maxLength={200}  required/>
        <label>Contain</label>
        <textarea name="Contain" placeholder="Enter your Title" onChange={(e) => setContent(e.target.value)} maxLength={1000}  required/>
        </div>
        <button type="submit">Add</button>   

    </form>
   
    </>
    
}