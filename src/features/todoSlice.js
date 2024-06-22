import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter((item, index) => index !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.items[action.payload];
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        clearTodo: (state) => {
            state.items = [];
        }
    }
});

export const { addTodo, removeTodo, toggleTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;