import { Link } from "react-router-dom"
import { pageData } from "./pageData"
import "../Components/component.css"
import { useNavigate } from "react-router-dom"

export function Navbar(){
    const navigate = useNavigate()
    function handleLogout(){

        sessionStorage.removeItem("User")
        navigate("/")

    }

    return(
    <div className="navbar">
            {pageData.map((page)=>{
                return(
                    <Link to={page.path} className="navIcon">
                        <button>
                            {page.name}
                        </button>
                    </Link>
                )
            })}
            <button onClick={handleLogout}>Log Out</button>
    </div>)
}