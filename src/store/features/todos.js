import {createSlice} from '@reduxjs/toolkit'
import {todos} from '@db/todos';

export const Todos = createSlice({
    name: 'todos',
    initialState: {
        todos: todos,
    },
    reducers: {
        toggleComplete: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.complete = !todo.complete;
        },
        updateOrder: (state, action) => {
            state.todos = action.payload;
        },
        changeName: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.name = action.payload.name;
        },
        changeLabel: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.label = action.payload.label;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        addTodo: (state, action) => {
            state.todos.unshift({
                id: action.payload.id,
                name: action.payload.name,
                label: action.payload.label,
                timestamp: action.payload.timestamp,
                complete: false,
                expanded: action.payload.expanded,
            });
        },
        toggleCollapse: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.expanded = !todo.expanded;
        }
    }
})

export const {toggleComplete, updateOrder, changeName, changeLabel, removeTodo, addTodo, toggleCollapse} = Todos.actions
export default Todos.reducer