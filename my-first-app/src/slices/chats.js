import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//==============================================================================
export const saysCyborg = createAsyncThunk(
    'chats/saysCyborg',
    async function () {
        console.log('says cyborg: First Hi!')
        setTimeout(() => {
            console.log('says cyborg: Second Hi!')
            const date = { author: 'robot', message: 'Привет!' };
            return date;
        }, 1500)
    }
)
//==============================================================================
const arrChats = [
    {
        id: 0,
        name: 'Федя',
        messageList: [
            { author: 'Федя', message: 'Привет! Ты где пропадал?' },
            { author: 'You', message: 'Это сектер, я не могу пока это рассказать.' },
        ]
    },
    {
        id: 1,
        name: 'Great',
        messageList: [
            { author: 'Great', message: 'Привет! Как долетел до России?' },
            { author: 'You', message: 'Привет! Ужастно, мне пришлось лететь в "эконом"' },
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
            return [...state, action.payload]
        },
        removeChat: (state, action) => {
            state.splice(action.payload, 1);
            state.map((e, i) => ({ ...e, id: i }));
            return state
        },
        removeMessage: (state, action) => {
            state[action.payload.chatID].messageList.splice([action.payload.id], 1)
            return state
        },
        addMessage: (state, action) => {
            state[action.payload[1]].messageList.push({ author: 'You', message: action.payload[0] })
            return state
        },
        extraReducers: {
            [saysCyborg.pending]: (state, action) => {
                console.log('says cyborg: Third Hi!')
            },
            [saysCyborg.fulfilled]: (state, action) => {
                console.log('says cyborg: Fourth Hi!')
            },

        }

    },
});


export const { addChat, removeChat, removeMessage, addMessage } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;

//-------------------
// <<<<<<<<< lesson-7
// lesson-6 >>>>>>>>>
//-------------------

/*
import { createSlice } from '@reduxjs/toolkit';

const arrChats = [
    {
        id: 0,
        name: 'Федя',
        messageList: [
            { author: 'Федя', message: 'Привет! Ты где пропадал?' },
            { author: 'You', message: 'Это сектер, я не могу пока это рассказать.' },
            { author: 'Федя', message: 'Опять ездил в Лондон?' },
            { author: 'You', message: 'Давай закроем эту тему. Расскажи лучше как у тебя дела?' },
            { author: 'Федя', message: 'Всё по старому. Работа - дом, работа - дом' },
            { author: 'You', message: 'Я надеюсь, что скоро все изменится' },
        ]
    },
    {
        id: 1,
        name: 'Great',
        messageList: [
            { author: 'Great', message: 'Привет! Как долетел до России?' },
            { author: 'You', message: 'Привет! Ужастно, мне пришлось лететь в "эконом"' },
            { author: 'Great', message: 'Жесть!' },
            { author: 'You', message: 'Ни то стово! Я больше на это не соглашусь.' },
            { author: 'Great', message: 'А ты не думал на совсем остатся у нас в Лондоне?' },
            { author: 'You', message: 'Нет! Я родину люблю!' },
        ]
    },
    {
        id: 2,
        name: 'Ara',
        messageList: [
            { author: 'Ara', message: 'Привет! Приезжай в гости!' },
            { author: 'You', message: 'Привет, пока не могу.' },
            { author: 'Ara', message: 'У меня чача готова, я мяса пожарю' },
            { author: 'You', message: 'Давай в другой раз, я реально занят' },
            { author: 'Ara', message: 'В другой раз чача закончится!' },
            { author: 'You', message: 'У тебя весь подвал чачей забит, как она закончится?' },
            { author: 'Ara', message: 'Поверь мне, она быстро заканчиваестя!' },
        ]
    },
    {
        id: 3,
        name: 'Chicken',
        messageList: [
            { author: 'Chicken', message: 'Привет! Пойдем погуляем?' },
            { author: 'You', message: 'Привет, пока не могу, мы с Джоном едим на важную встречу.' },
            { author: 'Chicken', message: 'Когда вернетесь' },
            { author: 'You', message: 'Планируем освободится в 20:00' },
            { author: 'Chicken', message: 'Тогда может вечером в коно?' },
            { author: 'You', message: 'Отличная идея, купи пожалуйста билеты' },
            { author: 'Chicken', message: 'Ок! До вечера!' },
            { author: 'You', message: 'До вечера!' },
        ]
    },
    {
        id: 4,
        name: 'Шкура',
        messageList: [
            { author: 'Шкура', message: 'Почему ты мне ни чего не сказал, что опять улетаешь?' },
            { author: 'You', message: 'Небыло времени.' },
            { author: 'Шкура', message: 'Ты меня не уважаешь!' },
            { author: 'You', message: 'И что дальше?' },
            { author: 'Шкура', message: 'Не пиши мне, забудь меня.' },
            { author: 'You', message: 'ОК!' },
            { author: 'robot', message: 'Пользователь добавил вас в черный список' },
        ]
    },
    {
        id: 5,
        name: 'Мама',
        messageList: [
            { author: 'Мама', message: 'Привет! Купи хлеба' },
            { author: 'You', message: 'Нут, я вернуть в воскресенье.' },
            { author: 'Мама', message: 'А ты где?' },
            { author: 'You', message: 'Я же говорил, что я ужехал на конфиренцию в Самару' },
            { author: 'Мама', message: 'Я только что звонила Михаилу, он сказал, что он один в Самаре!' },
            { author: 'You', message: 'Мама, давай в воскресенье поговорим' },
            { author: 'Мама', message: 'Не смей врать матери.' },
        ]
    },
    {
        id: 6,
        name: 'Hu Lee',
        messageList: [
            { author: 'Hu Lee', message: 'Работа выполнена!' },
            { author: 'You', message: 'Как кая работа?' },
            { author: 'Hu Lee', message: 'Я подстриг все кусты и весь газон!' },
            { author: 'You', message: 'Ооо! Точно! Спасибо!' },
            { author: 'Hu Lee', message: 'Спасибо в карман не положишь!' },
            { author: 'You', message: 'Сечас переведу тебе деньги' },
            { author: 'Hu Lee', message: 'Спасибо, деньги получил' },
        ]
    },
];

const chatSlice = createSlice({
    name: 'chats',
    initialState: arrChats,
    reducers: {
        addChat: (state, action) => {
            action.payload.id = state.length;
            return [...state, action.payload]
        },
        removeChat: (state, action) => {
            state.splice(action.payload, 1);
            state.map((e, i) => ({ ...e, id: i }));
            return state
        },
        removeMessage: (state, action) => {
            state[action.payload.chatID].messageList.splice([action.payload.id], 1)
            return state
        },
        addMessage: (state, action) => {
            console.log(action.payload[1])
            state[action.payload[1]].messageList.push({ author: 'You', message: action.payload[0] })
            return state
        }
    },
});


export const { addChat, removeChat, removeMessage, addMessage } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
*/
