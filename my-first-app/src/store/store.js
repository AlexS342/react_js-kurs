//ToolKit
import { configureStore } from '@reduxjs/toolkit';
import { chatReducer } from '../slices/chats'
import { chatIDReducer } from '../slices/chatID'

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        chatID: chatIDReducer,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())