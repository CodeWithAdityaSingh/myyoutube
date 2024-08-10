import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from './sideBarSlice'

let appstore = configureStore({

   reducer :{
    sidebar : sideBarReducer
   }
})


export default appstore