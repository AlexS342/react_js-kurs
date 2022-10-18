import * as React from 'react';
import { useState, useCallback, useRef, } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addMessage, saysCyborg } from '../../../slices/chats';
import Form from '../Presentation/form';

const ChatForm = () => {

    const dispatch = useDispatch();
    const addMessageHandler = (value, chatID) => {
        dispatch(addMessage([value, chatID])); dispatch(saysCyborg(chatID));
    }
    const chatID = useSelector(state => state.chatID);
    const inputFocus = useRef(null);
    const [value, setValue] = useState(['', '']);
    const [clear, setClear] = useState('');

    const handleChange = useCallback((e) => {
        setValue([e.target.value, 'You']);
        setClear(e.target.value);
    }, []);

    const handleSubmit = (item) => {
        setClear('');
        item.preventDefault();
        inputFocus.current.childNodes[1].childNodes[0].focus();
        addMessageHandler(value, chatID);
    }

    return (
        <Form
            handleSubmit={handleSubmit}
            inputFocus={inputFocus}
            clear={clear}
            handleChange={handleChange}
        />
    );
}

export default ChatForm;