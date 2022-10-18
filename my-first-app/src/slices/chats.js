import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const saysCyborg = createAsyncThunk(
    'chats/saysCyborg',
    async function (action) {
        const data = [action, 'Cyborg', "Добрый вечер! Я готов вас выслушать"];
        return data;
    }
)

const arrChats = [
    {
        id: 0,
        name: 'Федя',
        messageList: [
            { author: 'Федя', message: 'Привет! Ты где пропадал?' },
            { author: 'You', message: 'Это сектер, я не могу пока рассказать' },
        ]
    },
    {
        id: 1,
        name: 'Great',
        messageList: [
            { author: 'Great', message: 'Привет! Как долетел до России?' },
            { author: 'You', message: 'Привет! Я летел в "эконом"' },
            { author: 'Great', message: 'Жесть!' },
        ]
    },
    {
        id: 2,
        name: 'Ara',
        messageList: [
            { author: 'Ara', message: 'Привет! Приезжай в гости!' },
            { author: 'You', message: 'Привет, пока не могу.' },
        ]
    },
];

const chatSlice = createSlice({
    name: 'chats',
    initialState: arrChats,
    reducers: {
        addChat: (state, action) => {
            action.payload.id = state.length;
            return [...state, action.payload];
        },
        removeChat: (state, action) => {
            state.splice(action.payload, 1);
            state.map((e, i) => ({ ...e, id: i }));
            return state;
        },
        removeMessage: (state, action) => {
            state[action.payload.chatID].messageList.splice(
                [action.payload.id], 1
            );
            return state;
        },
        addMessage: (state, action) => {
            state[action.payload[1]].messageList.push({
                author: action.payload[0][1], message: action.payload[0][0]
            });
            return state;
        },
    },
    extraReducers: {
        [saysCyborg.fulfilled]:
            (state, action) => {
                const cyborgMessage = {
                    author: action.payload[1], message: action.payload[2]
                };
                state[action.payload[0]].messageList.push(cyborgMessage);
            },
    },
});

export const {
    addChat, removeChat, removeMessage, addMessage
} = chatSlice.actions;
export const chatReducer = chatSlice.reducer;