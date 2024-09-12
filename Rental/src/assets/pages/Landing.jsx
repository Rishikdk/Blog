import { CreateUser } from "../Components/CreateUser"
import { LoginUser} from "../Components/LoginUser"
import { useState } from "react"

export function Landing(){

    const [view, setView]= useState(0)
    return(<>
            {!view ?
            <> 
            <LoginUser/>
            <button onClick={()=> setView(!view)}> Create new Account</button>
            </>: 
            <>
            <CreateUser/>
            <button onClick={()=> setView(!view)}>Login existing </button>
            </>}

    </>
  )
}