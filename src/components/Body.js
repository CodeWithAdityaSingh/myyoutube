import { useSelector } from "react-redux"
import SideBar from "./SideBar"
import VideoContainer from "./VideoContainer"
import SideBar2 from "./SideBar2"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Watch from "./Watch"




let Body = ()=>{
    let selector = useSelector((store)=>store.sidebar.sideBarToggle)
    
 

    return (
        <div className="flex ">
           {selector? <SideBar/> : <SideBar2/>}
           
            <Outlet/>
        </div>
    )
}


export default Body