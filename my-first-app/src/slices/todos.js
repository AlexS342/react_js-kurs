import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const todosJson = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if (!todosJson) {
                throw new Error()
            }
            const data = await todosJson.json();
            return data;
        } catch (error) {
            console.dir(error);
            return rejectWithValue(error.message);
        }
    })

const initialState = [];

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: initialState,
        status: null,
        error: null,
    },
    reducers: {
        addTodos: (state, action) => {
            const task = { "userId": 1, "id": 0, "title": "", "completed": false }
            task.id = state.todos.length + 1;
            task.title = action.payload;
            state.todos.push(task);
        },
        removeTodos: (state, action) => {
            console.log('removeTodos ok');
            console.log(action.payload);
        },
        statusTodos: (state, action) => {
            console.log('statusTodos ok');
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            console.log('pending ok');
            state.status = 'pending';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            console.log('fulfilled ok');
            state.status = 'fulfilled';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: (state, action) => {
            console.log('error ok');
            state.status = 'rejected';
            state.error = action.payload;
        }

    },
});

export const { addTodos, removeTodos, statusTodos } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;