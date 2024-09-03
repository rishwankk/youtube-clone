import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlice"
import searchSlice from "./searchSlice";

const store=configureStore({
    reducer:{
        sideBar:sideBarReducer,
        search:searchSlice

    }
})
export default store