import { Link } from "react-router-dom"
import { pageData } from "./pageData"
export function Navbar(){
    render(
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