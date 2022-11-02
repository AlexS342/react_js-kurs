import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ChatPage from '../Components/Chats/ChatPage';
import { useDispatch, } from "react-redux";
import { sendID } from '../slices/chatID';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Navigate, } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { addChat, initChat, getAllChats } from '../firebase/crud'



function Chats() {

    const isAuth = useAuth().isAuth
    let { chatId } = useParams();
    const dispatch = useDispatch();

    const sendChatIdHandler = (id) => { dispatch(sendID(id)) }

    useEffect(() => { getPostsHandler1() }, []);

    const [data1, setData1] = useState([]);
    const getPostsHandler1 = async () => {
        let data = await getAllChats();
        setData1(data);
    }

    const [value, setValue] = useState('');

    return isAuth ? (
        <>
            <div className='chats'>
                <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper', }} component="nav" aria-label="mailbox folders">
                    <h3>Список чатов:</h3>
                    <Divider />
                    {data1.map((el, id) =>
                        <div key={el.id}>
                            <div>
                                <Link to={el.id}>
                                    <ListItem button onClick={() => sendChatIdHandler(el.id)}>
                                        <ListItemText primary={el.name} secondary={el.email} />
                                    </ListItem>
                                </Link>
                            </div>
                            <Divider />
                        </div>
                    )}
                    <div className='chats-forma'>

                        <input placeholder='Имя чата'
                            onChange={(e) => { setValue(e.target.value) }}
                        />

                        <button onClick={() => {
                            addChat(value);
                            initChat(value);
                            getPostsHandler1();
                        }}>
                            Добавить Чат
                        </button>

                    </div>
                </List>
                <>
                    {chatId
                        ? <ChatPage />
                        : <div className='chats-null'><p>Выбери чат</p></div>}
                </>
            </div >
        </>
    ) :
        (<Navigate to={'/profile'} />)
}

export default Chats;