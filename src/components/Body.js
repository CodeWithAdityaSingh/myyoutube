import { useSelector } from "react-redux"
import SideBar from "./SideBar"
import VideoContainer from "./VideoContainer"
import SideBar2 from "./SideBar2"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Watch from "./Watch"
import MainContainer from "./MainContainer"



let Body = ()=>{
    let selector = useSelector((store)=>store.sidebar.sideBarToggle)

    return (
        <div className="flex ">
           {selector? <SideBar/> : <SideBar2/>}
            <RouterProvider router={route}/>
        </div>
    )
}

let route = createBrowserRouter([
     {
        path : '/',
        element : <MainContainer/>,
        children  :  ([
            {
                path : '/watch',
                element : <Watch/>
            },
            {

                path : '/',
                element : <VideoContainer/>
            },
            

        ])
     },
     
])


export default Body