import * as React from 'react';
import { useSelector } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, } from "firebase/firestore";
import { firestore } from '../../firebase/firebase';
import { useAuth } from '../../hooks/useAuth';

const ChatPage = () => {

    const chatID = useSelector(state => state.chatID);
    const put = 'chats/' + chatID + '/message'
    const [data, setData] = useState([])

    const getPostsHandler = async () => {
        let data = await getAllPost()
        setData(data)
    }

    useEffect(() => {
        getPostsHandler()
    }, [chatID])

    const getAllPost = async () => {
        const response = await getDocs(collection(firestore, put))
        const arr = response.docs.map(e => e.data())
        return arr
    }

    return (
        <List sx={{
            width: '100%', maxWidth: 600, bgcolor: 'background.paper'
        }}>
            <h3>Чат {chatID}</h3>
            {data.map((el, id) =>
                <ListItem key={id} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={el.author}
                            src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={el.author} secondary={
                        <React.Fragment> {el.text} </React.Fragment>
                    } />
                </ListItem>
            )}
            <MessageForm />
        </List>
    );
}

export default ChatPage;

const MessageForm = () => {

    const emailAuth = useAuth().email;

    const chatID = useSelector(state => state.chatID);

    const [value, setValue] = useState('');
    const addPost = async (data) => {
        const result = addDoc(collection(firestore, `chats/${chatID}/message`), { text: data, author: emailAuth })
    }

    return (
        <div>
            <input placeholder='Сообщение'
                onChange={(e) => { setValue(e.target.value) }}
            />
            <button onClick={() => {
                console.log('Кнопка нажата')
                addPost(value);
            }}>
                Отправить
            </button>
        </div>
    )

}
