import { useEffect, useState } from "react"
import { API_KEY, SEARCH_API } from "../utils/constans"
import { useDispatch, useSelector } from "react-redux"
import VideoCard from "./VideoCard"
import { addSearchData } from "../utils/searchSlice"
import SearchVideos from "./SearchVideos"
import { Link } from "react-router-dom"

let WatchPage2 = ()=>{

   
    let dispatch = useDispatch(null)

    
  let query = useSelector((store)=>store.search.searchItems)
  let selector = useSelector((store)=>store.search.searchData)



    let fech =  async ()=>{
        let data = await fetch( `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=` + API_KEY )
        let json = await data.json()
    
        dispatch(addSearchData(json.items))
       
    }
    useEffect(()=>{
        fech()
    },[query])



  if(!selector) return
   
    return (
     <div className="w-screen">
        {

          selector.map((data)=>   <Link  key={data.id.videoId} to={'/watch?v=' + data.id.videoId}><SearchVideos data = {data}/></Link>)

        }
     </div>
    )
}


export default WatchPage2