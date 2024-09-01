import {getPosts} from "../../api"
import { useState, useEffect } from "react"
import { BlogCard } from "../Components/Blogcard"

export function Home(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        async function loadAllPost() {
            const data = await getPosts()
            data.sort((d1,d2)=> new Date(d2.dateCreated).getTime()- new Date(d1.dateCreated).getTime())
            setPosts(data)
  
        }
        loadAllPost()

    },[])
    return<>
    {posts.map((post)=>{
        return(
          <BlogCard post={post} />
        )
    })}
    
    </>
}