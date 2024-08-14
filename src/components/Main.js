import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./Body"
import Header from "./Header"
import Watch from "./Watch"
import VideoContainer from "./VideoContainer"

let Main = ()=>{

    return(
        <div>
            <Header/>

           <RouterProvider router={route}/>


        </div>
    )
}

let route =  createBrowserRouter ([
    {

        path : '/',
        element : <Body/>,
        children : [
            {
                 path : '/',
                 element : <VideoContainer/>
            },
            {
                 path : '/watch',
                 element : <Watch/>
            },
        ]
    }
])



export default Main