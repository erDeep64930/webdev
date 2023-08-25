import { configureStore } from "@reduxjs/toolkit";
import  messageSlice from "./slices/messageSlice";


export default configureStore({
    reducer: {
        messageTry:messageSlice
    }
})