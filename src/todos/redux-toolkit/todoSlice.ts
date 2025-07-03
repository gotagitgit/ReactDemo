import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "./models";

const initialState: TodoState = {
  items: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Use Redux Hooks', completed: false }
  ]
};

export const todoSlice = createSlice(
{
    name: 'reduxTodos',
    initialState,
    reducers: 
    {
        addToDo: (state, action: PayloadAction<string>) =>
        {
            const newTodo = 
            {
                id: Date.now(),
                text: action.payload,
                completed: false
            };

            state.items.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<number>) =>
        {
            const todo = state.items.find(item => item.id === action.payload);

            if (todo)
            {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) =>
        {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToDo, toggleTodo, deleteTodo } = todoSlice.actions;