import { createPost } from "../../api"
import { useEffect, useState } from "react"
import "./pages.css"


export function CreateBlog(){
const [postCreate, setPostCreate] =  useState([])

    async function makePost() {
        let postData={
            title:"aaaa", 
            description:"bbbbb",
            contain:"ccccc",
            dateCreated: new Date()
    }
    createPost(postData)
        
    }


    return<>
    <form>
        <div className="Containers_create"> 
        <label>Title</label>
        <input type="text" className="title" placeholder="Enter your Title" />
        <label>Description</label>
        <input type="Textarea" placeholder="Enter your Title" />
        <label>Contain</label>
        <input type="text" placeholder="Enter your Title" />
        <label>Date</label>
        <input type="Date" placeholder="Enter your Title" />
        </div>
        <button onClick={makePost}>Add</button>   

    </form>
   
    </>
    
}