import { verifyUser } from "../../api";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

export function LoginUser(){
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const navigate =useNavigate();
    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })

    }

    async function handleSubmit(e) {
        e.preventDefault()
        let response = await verifyUser(user)
        if( response){
            sessionStorage.setItem("User", response)
            axios.defaults.headers.common["Authorization"] = `Bearer ${response}`
            navigate("/home")
    }else{
        alert("Login Failed")
    }
    }


    return(
        <form onSubmit={handleSubmit}>
            <input placeholder= "Email" onChange={handleChange} name="email"required></input>
            <input type="password" placeholder="Password" onChange={handleChange} name="password"required></input>
        <button type="submit">Login</button>
        </form>
    )

}