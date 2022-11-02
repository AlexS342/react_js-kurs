import * as React from 'react';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getAllMessage } from '../../firebase/crud'
import PresentationChatPage from './PresentationChatPage'

const ChatPage = () => {

    const chatID = useSelector(state => state.chatID);
    const way = 'chats/' + chatID + '/message'
    const [data, setData] = useState([])

    const getPostsHandler = async () => {
        let data = await getAllMessage(way)
        setData(data)
    }

    useEffect(() => { getPostsHandler() }, [chatID])

    const emailAuth = useAuth().email;

    const [value, setValue] = useState('');

    return (
        <>
            <PresentationChatPage chatID={chatID} data={data} setValue={setValue} value={value} emailAuth={emailAuth} getPostsHandler={getPostsHandler} />
        </>
    );
}

export default ChatPage;
