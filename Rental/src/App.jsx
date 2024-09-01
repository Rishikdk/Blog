import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios" //used to geab data to fetch data 


function App() {
  const [data, setData]= useState()
  

  //function to get data from backend
  useEffect(()=>{
      async function grabData() {
        const response = await axios.get("http://localhost:3000/posts")
        if(response.status === 200){
          setData(response.data)
        }
      }
      grabData()
  },[])


  return (
    <>
    {JSON.stringify(data)}
    </>
  )
}

export default App
