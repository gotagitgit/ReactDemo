import { configureStore } from "@reduxjs/toolkit";
import { TodoState } from "./models";

export type TodoAction = 
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };

const initialState: TodoState = 
{
    items: [
        { id: 1, text: 'Learn Redux', completed: false },
        { id: 2, text: 'No More Props', completed: false }
    ]
};

const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState =>
{
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                items: [
                    ...state.items, 
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false
                    }]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                items: state.items.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
            };
        case 'DELETE_TODO':
            return {
                ...state,
                items: state.items.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
}

export const store = configureStore(
    {
        reducer: todoReducer
    }
);