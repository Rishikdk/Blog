import { verifyUser } from "../../api";
import { useState } from "react";

export function LoginUser(){
    const [user, setUser] = useState({
        email:"",
        password:""



    })
    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })

    }

    async function handleSubmit(e) {
        e.preventDefault()
        let response = await verifyUser(user)
        console.log(response)
        
    }



    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Email" onChange={handleChange}name="email"required></input>
            <input type="password" placeholder="Password" onChange={handleChange} name="password"required></input>
        <button type="submit">Login</button>
        </form>
    )

}