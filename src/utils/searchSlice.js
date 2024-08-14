import { createSlice } from "@reduxjs/toolkit";

let searchSlice = createSlice({
    name : 'search',
    initialState : {

        searchItems : null,
        searchData : null,
        videoContainerData : null,

    },

   reducers : {

    addSearch  : (state,action)=>{

     state.searchItems = action.payload

    },
    addSearchData : (state,action)=>{

     state.searchData = action.payload
    },
    addVideoContainerData : (state,action)=>{
       state.videoContainerData = action.payload
    }


   }
})

export const {addSearch,addSearchData,addVideoContainerData} = searchSlice.actions
export default searchSlice.reducer