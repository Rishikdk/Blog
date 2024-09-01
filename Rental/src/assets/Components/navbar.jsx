import { Link } from "react-router-dom"
import { pageData } from "./pageData"
import "../Components/component.css"
export function Navbar(){
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
    </div>)
}