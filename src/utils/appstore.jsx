import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice"
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        sideBar:sideBarReducer,
        search:searchSlice,
        chat: chatSlice

    }
})
export default store