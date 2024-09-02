import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice=createSlice({
    name:"sideBar",
    initialState:{
        isOPenMenu:true
    },
    reducers:{
        toggeleMenu:(state,action)=>{
            state.isOPenMenu=!state.isOPenMenu
        },
        menuClose:(state,action)=>{
            state.isOPenMenu=false
        }

      
    }
})
export const{toggeleMenu,menuClose}=sideBarSlice.actions
export default sideBarSlice.reducer