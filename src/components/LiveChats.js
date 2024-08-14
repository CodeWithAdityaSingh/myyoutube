import React, { useEffect, useState } from 'react'
import LiveChatMessage from './LiveChatMessage'
import { liveChatData } from '../utils/liveChatConstants'
import { useDispatch } from 'react-redux'
import { addData, addDataManually } from '../utils/liveChatSlice'
import { useSelector } from 'react-redux'
import { index } from '../utils/liveChatConstants'

const LiveChats = () => {
    let[chattext,setChatText] = useState('')

    let selector = useSelector((store)=> store.liveChat.liveArray)


    let dispatch = useDispatch()
    useEffect (()=>{
    let interval =  setInterval (()=>{
       
    dispatch(addData({name : index() , text : 'This is live Chat🚀'})) 
    
       
     },1000)


     return ()=> clearInterval(interval)
     
    },[])
  return (
    <div className='w-6/12 border border-black ml-2 p-2 bg-slate-100 rounded-lg h-[450px] overflow-y-scroll flex flex-col '>
        <div className='font-bold sticky top-0 m-3'>Live Chat :</div>
       {
        selector.map((elem,index)=> <LiveChatMessage key={index}  name = {elem.name} text = {elem.text}/>)
       }
     <div className='flex sticky bottom-0 p-2 m-2'>
     <input  value={chattext} className='w-8/12 rounded-md' type='text' placeholder='chat here🚀' onChange={(e)=>{
        setChatText(e.target.value)
     }}></input>
     <button className='p-2 bg-slate-400 ml-2 rounded-md' onClick={()=>{

        dispatch(addDataManually({name :'Aditya Singh' , text : chattext}))
        setChatText('')
     }}>📤</button>
     </div>
    </div>
  )
}

export default LiveChats
