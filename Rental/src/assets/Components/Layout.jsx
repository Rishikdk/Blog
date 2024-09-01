import { Navbar } from "./navbar"
import { Outlet } from "react-router-dom" //r


export function Layout(){
    render(<>
    <Navbar/>
    <Outlet/>
    
    </>)


}