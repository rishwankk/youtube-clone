import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice"

const store=configureStore({
    reducer:{
        sideBar:sideBarReducer

    }
})
export default store