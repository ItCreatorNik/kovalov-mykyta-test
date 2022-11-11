import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobsReducer from './slice/jobsSlice'


const rootReducer = combineReducers({
    job: jobsReducer,
})


export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     }),
})