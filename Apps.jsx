import { useState, useEffect } from 'react'
import { getPosts, getPost, createPost,updatePost,deletePost} from './api'
import './App.css'




function Apps() {
  const [posts, setPosts]= useState()
  //data uplode to the data base
  function makePost(){
    let postObject ={
      title:"aaaa",
      description:"bbbbb",
      contain:"ccccc",
      dataCreated: new Date()
    }
    createPost(postObject)
  }

  //function to get data from backend
  // useEffect(()=>{
  //   async function loadAllPosts() {
  //     let data = await getPosts()
  //     if(data){
  //       setPosts(data)
  //     }
  //   }
  //  loadAllPosts()
  // }, [])


  return (
    <>
    {/* {JSON.stringify(posts)} */}
    
    <button onClick={makePost}>
      Create Object

    </button>
    </>
  )
}

export default Apps
