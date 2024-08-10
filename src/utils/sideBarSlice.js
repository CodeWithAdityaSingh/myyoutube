import { createSlice } from "@reduxjs/toolkit";

let sideBarSlice = createSlice({
    name : "sidebar",
    initialState : {
        sideBarToggle : false,
        theme : null
    },
    reducers :{

        addToggle : (state,action)=>{
          state.sideBarToggle = !state.sideBarToggle
        },
        addTheme : (state,action)=>{
          state.theme = !state.theme
        }


    }

})


export const {addToggle,addTheme} = sideBarSlice.actions

export default sideBarSlice.reducer