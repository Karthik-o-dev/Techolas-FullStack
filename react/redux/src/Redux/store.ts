import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/CounterSlice";

const combinedReducer = combineReducers({
    counter: counterReducer
})

export const store = configureStore({
    reducer: combinedReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

