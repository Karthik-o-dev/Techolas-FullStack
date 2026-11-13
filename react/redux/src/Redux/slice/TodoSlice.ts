import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../types/todo";

type TodoInit = {
    todos: Todo[]
}

const init: TodoInit = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState: init,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = [action.payload, ...state.todos]
        },
        removeTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todos = state.todos.filter(item => item.id !== action.payload.id);
        },
        updateTodo: (state, action: PayloadAction<{ id: string; title?: string; is_completed?: boolean | undefined }>) => {
            state.todos = state.todos.map((item) => {
                if (item.id == action.payload.id) {
                    const currentTime = new Date().toLocaleString("en-IN");
                    return { ...item, updated_at: currentTime, title: action.payload.title, is_completed: action.payload.is_completed ?? false };
                }
                return item;
            })
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export const { reducer: todoReducer } = todoSlice;