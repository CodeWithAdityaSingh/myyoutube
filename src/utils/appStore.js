import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from './sideBarSlice'
import searcReducer  from './searchSlice'
import liveReducer  from './liveChatSlice'

let appstore = configureStore({

   reducer :{
    sidebar : sideBarReducer,
    search : searcReducer,
    liveChat : liveReducer
   }  
})


export default appstore