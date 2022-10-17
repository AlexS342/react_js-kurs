import * as React from 'react';
import { useState, useCallback, useRef, } from 'react';
//for toolkit
import { useDispatch, useSelector } from "react-redux";
import { addMessage, saysCyborg } from '../../slices/chats';
//material-ui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const ChatForm = () => {

    const dispatch = useDispatch();
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Вызываю aysCyborg() при отправке сообщения
    const addMessageHandler = (value, chatID) => { dispatch(addMessage([value, chatID])); dispatch(saysCyborg()); }

    const chatID = useSelector(state => state.chatID);

    const inputFocus = useRef(null);
    const [value, setValue] = useState('');
    const [clear, setClear] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        setClear(e.target.value);
    }, []);

    const handleSubmit = (item) => {
        setClear('')
        item.preventDefault();
        inputFocus.current.childNodes[1].childNodes[0].focus();
        addMessageHandler(value, chatID);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <TextField size="small" ref={inputFocus} fullWidth label="Ваше сообщение" id="fullWidth" value={clear} onChange={handleChange} />
            <Button type='submit' variant="contained" endIcon={<SendIcon />}>Send</Button>
        </form>
    );
}

export default ChatForm;