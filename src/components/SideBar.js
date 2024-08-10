import { headerSideBar } from "../utils/constans"
import { HEADER } from "../utils/constans"
import { HEADER_DES } from "../utils/constans"
import SideBarDes from "./SideBarDes"
let SideBar = ()=>{
 
    return (

      <div className="shadow-md  border ">
        {
            headerSideBar.map((eachItem,index)=>{
             return <h1 key={eachItem} className="font-bold text-xl m-4 ">{eachItem}</h1>
            })
        }

       {
            HEADER.map ((heading,index) =>{

              return(

                <div  key={heading} className="m-6 ">
                  <h1  className="font-bold text-xl">{heading}</h1>
                  <SideBarDes data = {HEADER_DES[index]}/>
                </div>
            ) 

                
            })
        }
     
      </div>
    )
}


export default SideBar