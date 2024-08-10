import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { addToggle } from '../utils/sideBarSlice';
import { useDispatch } from 'react-redux';


const Watch = () => {

  let [param,setParam] = useSearchParams()

  let dispatch = useDispatch()

  let data = param.get('v')

  console.log(data);
  
  

  useEffect(()=>{
    dispatch(addToggle())
    },[])
     

  
 
  
 
  
  
  return (
    <div>
     <iframe width="900" height="500" src={"https://www.youtube.com/embed/" + data }title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Watch
