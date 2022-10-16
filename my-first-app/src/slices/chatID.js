import { createSlice } from '@reduxjs/toolkit';

const chatIDSlice = createSlice({
    name: 'chatsID',
    initialState: 0,
    reducers: {
        sendID: (state, action) => {
            state = action.payload
            return state
        },
    },
});


export const { sendID } = chatIDSlice.actions;
export const chatIDReducer = chatIDSlice.reducer;

//-------------------
// <<<<<<<<< lesson-7
// lesson-6 >>>>>>>>>
//-------------------

/*
import { createSlice } from '@reduxjs/toolkit';

const chatIDSlice = createSlice({
    name: 'chatsID',
    initialState: 0,
    reducers: {
        sendID: (state, action) => {
            state = action.payload
            return state
        },
    },
});


export const { sendID } = chatIDSlice.actions;
export const chatIDReducer = chatIDSlice.reducer;
*/