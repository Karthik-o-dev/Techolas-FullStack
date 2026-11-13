import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/CounterSlice";
import { todoReducer } from "./slice/TodoSlice";

const combinedReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

export const store = configureStore({
    reducer: combinedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

