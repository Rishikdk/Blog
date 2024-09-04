import { BlogCard } from "../Components/Blogcard"
import{getPost, deletePost} from "../../api"
import { useParams, useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"


export function ReadBlog(){
const [post, setPost] = useState({})
const navigate = useNavigate()

  let params = useParams()
  let id=params.id


  useEffect(()=>{
    async function loadPost() {
      let data = await getPost(id)
      let date = new Date(data.dateCreated)
      data.dateCreated = date.toString()
      setPost(data)
    }
    loadPost()

  },[])


  async function deleteDAta() {
    loadPost = await deletePost(id)
  }
    return<>

    <h1>{post.title}</h1>
    <h2>{post.description}</h2>
    <h3>{post.dateCreated?.slice(4,15)}</h3>
    <p>{post.contain}</p>
    <button onClick={deleteDAta}>Delete</button>
    <button onClick={()=> navigate(-1)}>Back</button>

    </>
}