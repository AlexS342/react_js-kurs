import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";                           //Подключили BrowserRouter, RouterProvider, Routes, Route

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


/*Массив с диалогами*/
const arrChats = [
    {
        name: 'Вася', messageList: [
            { author: 'Вася', message: 'Привет! Ты где пропадал?' },
            { author: 'You', message: 'Это сектер, я не могу пока это рассказать.' },
            { author: 'Вася', message: 'Опять ездил в Лондон?' },
            { author: 'You', message: 'Давай закроем эту тему. Расскажи лучше как у тебя дела?' },
            { author: 'Вася', message: 'Всё по старому. Работа - дом, работа - дом' },
            { author: 'You', message: 'Я надеюсь, что скоро все изменится' },
        ]
    },
    {
        name: 'Jon', messageList: [
            { author: 'Jon', message: 'Привет! Как долетел до России?' },
            { author: 'You', message: 'Привет! Ужастно, мне пришлось лететь в "эконом"' },
            { author: 'Jon', message: 'Жесть!' },
            { author: 'You', message: 'Ни то стово! Я больше на это не соглашусь.' },
            { author: 'Jon', message: 'А ты не думал на совсем остатся у нас в Лондоне?' },
            { author: 'You', message: 'Нет! Я родину люблю!' },
        ]
    },
    {
        name: 'Гога', messageList: [
            { author: 'Вася', message: 'Привет! Приезжай в гости!' },
            { author: 'You', message: 'Привет, пока не могу.' },
            { author: 'Вася', message: 'У меня чача готова, я мяса пожарю' },
            { author: 'You', message: 'Давай в другой раз, я реально занят' },
            { author: 'Вася', message: 'В другой раз чача закончится!' },
            { author: 'You', message: 'У тебя весь подвал чачей забит, как она закончится?' },
            { author: 'Вася', message: 'Поверь мне, она быстро заканчиваестя!' },
        ]
    },
    {
        name: 'Mery', messageList: [
            { author: 'Mery', message: 'Привет! Пойдем погуляем?' },
            { author: 'You', message: 'Привет, пока не могу, мы с Джоном едим на важную встречу.' },
            { author: 'Mery', message: 'Когда вернетесь' },
            { author: 'You', message: 'Планируем освободится в 20:00' },
            { author: 'Mery', message: 'Тогда может вечером в коно?' },
            { author: 'You', message: 'Отличная идея, купи пожалуйста билеты' },
            { author: 'Mery', message: 'Ок! До вечера!' },
            { author: 'You', message: 'До вечера!' },
        ]
    },
    {
        name: 'Катя', messageList: [
            { author: 'Катя', message: 'Почему ты мне ни чего не сказал, что опять улетаешь?' },
            { author: 'You', message: 'Небыло времени.' },
            { author: 'Катя', message: 'Ты меня не уважаешь!' },
            { author: 'You', message: 'И что дальше?' },
            { author: 'Вася', message: 'Не пиши мне, забудь меня.' },
            { author: 'You', message: 'ОК!' },
            { author: 'robot', message: 'Пользователь добавил вас в черный список' },
        ]
    },
    {
        name: 'Мама', messageList: [
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
        name: 'Boris', messageList: [
            { author: 'Boris', message: 'Работа выполнена!' },
            { author: 'You', message: 'Как кая работа?' },
            { author: 'Boris', message: 'Я подстриг все кусты и весь газон!' },
            { author: 'You', message: 'Ооо! Точно! Спасибо!' },
            { author: 'Boris', message: 'Спасибо в карман не положишь!' },
            { author: 'You', message: 'Сечас переведу тебе деньги' },
            { author: 'Boris', message: 'Спасибо, деньги получил' },
        ]
    },
]

/*Выводим список существующих чатов*/
function Chats() {

    let { chatId } = useParams();
    const [arr, setArr] = useState(arrChats);

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }} component="nav" aria-label="mailbox folders">
                <Divider />
                {arr.map((el, id) =>
                    <div key={id}>
                        <Link to={`${id}`}>
                            <ListItem button>
                                <ListItemText primary={el.name} />
                            </ListItem>
                        </Link>
                        <Divider />
                    </div>)
                }
            </List>
            <>
                {chatId && arr[chatId] ? <ChatPage allArr={arr[chatId]} /> : <p>Выбери чат</p>}

            </>
        </>
    );
}

/*Выводим все сообщения из чата*/
const ChatPage = (props) => {

    const allArr = props.allArr;
    const author = allArr.name;
    const message = allArr.messageList;

    console.log(message);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <h3>{author}</h3>
            {message.map((el, id) =>
                <ListItem key={id} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={el.author} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={el.author} secondary={
                        <React.Fragment>
                            {el.message}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            )}
        </List>
    );
}

export default Chats;



