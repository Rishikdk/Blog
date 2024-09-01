import { useState, useEffect } from 'react'
import { getPosts, getPost, createPost,updatePost,deletePost} from './api'
import './App.css'




function App() {
  const [posts, setPosts]= useState()
  //data uplode to the data base
  // function createPost(){
  //   let postObject ={
  //     title:"The data",
  //     description:"The love of the world",
  //     contain:"about my self",
  //     dataCreated: new Date()
  //   }
  //   axios.post("http://localhost:3000/posts", postObject)
  // }

  //function to get data from backend
  useEffect(()=>{
    async function loadAllPosts() {
      let data = await getPosts()
      if(data){
        setPosts(data)
      }
    }
   loadAllPosts()
  }, [])


  return (
    <>
    {JSON.stringify(posts)}
    
    {/* <button onClick={createPost}>
      Create Object

    </button> */}
    </>
  )
}

export default App
