import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ChatPage from '../Components/Chats/Container/ChatPage';
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat, } from '../slices/chats';
import { sendID } from '../slices/chatID';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

function Chats() {

    let { chatId } = useParams();
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chat);
    const removeChatHandler = (id) => { dispatch(removeChat(id)); }
    const addChatHandler = () => { dispatch(addChat(newChat)); }
    const sendChatIdHandler = (id) => { dispatch(sendID(id)) }

    const newChat = {
        id: null,
        name: 'user',
        messageList: []
    }

    return (
        <>
            <div className='chats'>
                <List sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper', }} component="nav" aria-label="mailbox folders">
                    <p>Чаты:</p>
                    <Divider />
                    {chats.map((el, id) =>
                        <div key={id} >
                            <div>
                                <Link to={`${id}`}>
                                    <ListItem button onClick={() => sendChatIdHandler(id)}>
                                        <ListItemText primary={el.name} />
                                    </ListItem>
                                </Link>
                                <IconButton aria-label="delete" onClick={() => { removeChatHandler(id); }}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                            <Divider />
                        </div>
                    )}
                    <div className='chats_add'>
                        <Button onClick={() => { addChatHandler(); }} variant="contained" endIcon={<AddCircleOutlineSharpIcon />}>
                            Add chat
                        </Button>
                    </div>
                </List>
                <>
                    {chatId && chats[chatId]
                        ? <ChatPage />
                        : <div className='chats-null'><p>Выбери чат</p></div>}
                </>
            </div>
        </>
    );
}

export default Chats;