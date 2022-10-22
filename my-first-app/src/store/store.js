import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { chatReducer } from '../slices/chats';
import { chatIDReducer } from '../slices/chatID';
import { todosReducer } from '../slices/todos';

const persistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    chat: chatReducer,
    chatID: chatIDReducer,
    todos: todosReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
export const store = configureStore({
    // reducer: {
    //     chat: chatReducer,
    //     chatID: chatIDReducer,
    //     todos: todosReducer,
    // }
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//export default store;
export const persistor = persistStore(store);
