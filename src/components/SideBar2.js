import { Link } from "react-router-dom"

let SideBar2 = ()=>{

    return (
        <div className="text-xl font-semibold ml-7 shadow-md mx-2">
             <Link to={'/'}>  <h1 className="m-2">🏠Home</h1></Link>
            <h1 className="m-2">🎬Shorts</h1>
            <h1 className="m-2">👍Subscription</h1>
            <h1 className="m-2">👦You</h1>
        </div>
    )
}

export default SideBar2