import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        liveChat:[]
    },
    reducers:{
        addChat:(state,action)=>{
            if (state.liveChat.length >= 10) { 
                state.liveChat.shift(); 
            }
            state.liveChat.push(action.payload)
        }
    }
})

export const{addChat}=chatSlice.actions
export default chatSlice.reducer