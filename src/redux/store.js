import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Slices/TaskSlices'



const store = configureStore({
    reducer:{
    tasks:taskReducer
    }
})

export default store