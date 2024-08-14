import { createSlice } from "@reduxjs/toolkit";

let liveChatSlice = createSlice({
    name : 'liveChat',
    initialState : {
        liveArray : []
    },
    reducers : {

        addData : (state,action)=>{

        state.liveArray.splice(10,1)
        state.liveArray.push(action.payload)

        },

        addDataManually : (state,action)=>{
            state.liveArray.push(action.payload)
        }
    }
})


export const{addData,addDataManually} = liveChatSlice.actions
export default liveChatSlice.reducer
