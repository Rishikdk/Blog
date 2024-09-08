import { createUser } from "../../api";
import { useState } from "react";

export function CreateUser(){
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        date: new Date(),



    })
    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value })

    }

    async function handleSubmit() {
        let response = await createUser(user)
        if (response !== 200){
            alert("User account could not be created Try another way....!")
        }else{
            
        }
        
    }



    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="name" onChange={handleChange} name="name" required></input>
            <input placeholder="Email" onChange={handleChange}name="email"required></input>
            <input placeholder="Password" onChange={handleChange} name="password"required></input>
        <button type="submit">Create Account</button>
        </form>
    )

}