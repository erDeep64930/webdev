import { configureStore } from "@reduxjs/toolkit";
// import  messageReducer from "./slices/messageSlice";
import messageSlice from "./slices/messageSlice";

export default configureStore({
    reducer: {
         messageReducer:messageSlice
    }
})