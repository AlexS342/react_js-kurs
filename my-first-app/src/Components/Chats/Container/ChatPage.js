import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeMessage, } from '../../../slices/chats';
import Page from '../Presentation/Page';

const ChatPage = () => {
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chat);
    const removeMessageHandler = (id) => { dispatch(removeMessage({ chatID, id })); }

    const chatID = useSelector(state => state.chatID);
    const author = chats[chatID].name;
    const message = chats[chatID].messageList;

    return (
        <Page
            author={author}
            removeMessageHandler={removeMessageHandler}
            message={message}
        />
    );
}

export default ChatPage;