import {getPosts} from "../../api"
import { useState, useEffect } from "react"
import { BlogCard } from "../Components/Blogcard"

export function Home(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        async function loadAllPost() {
            const data = await getPosts()
            setPosts(data)
            if(data){

            }    
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