import React from 'react'
import { Outlet } from 'react-router-dom'


const MainContainer = () => {
  return (
    <div className='main-cont w-screen'>


     <Outlet/>

    </div>
  )
}

export default MainContainer
