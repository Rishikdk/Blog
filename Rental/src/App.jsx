import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios" //used to geab data to fetch data 


function App() {
  const [data, setData]= useState()
  //data send to the data base
  function createPost(){
    let postObject ={
      title:"The data",
      description:"The love of the world",
      contain:"about my self",
      dataCreated: new Date()
    }
    axios.post("http://localhost:3000/posts", postObject)
  }

  //function to get data from backend
  // useEffect(()=>{
  //     async function grabData() {
  //       const response = await axios.get("http://localhost:3000/posts")
  //       if(response.status === 200){
  //         setData(response.data)
  //       }
  //     }
  //     grabData()
  // },[])


  return (
    <>
    {/* {JSON.stringify(data)} */}
    <button onClick={createPost}>
      Create Object

    </button>
    </>
  )
}

export default App
