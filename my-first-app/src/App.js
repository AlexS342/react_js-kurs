import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import './StyleApp.css';
//Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



function App() {
  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState({ text: '', author: '' });
  const ROBOT_MESSAGE = 'Привет человет! Я получил твое сообщение';

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { text: ROBOT_MESSAGE, author: 'robot' }])
      }, 1500)
    }
  }, [messageList]);

  return (
    <div className='App'>
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      <div className='massageList'>
        {messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} />)}
      </div>
    </div>
  );
}

export default App;

const Form = ({ data, setData, setMessage }) => {

  const inputFocus = useRef(null);

  const { text, author } = data;

  const submitForm = (item) => {
    if (text.length > 0) {
      setMessage(prevent => [...prevent, { text, author }])
      item.preventDefault();
    }
    setData({ text: '', author: '' })
    inputFocus.current.childNodes[1].childNodes[0].focus()
  }

  return (
    <form onSubmit={submitForm}>
      <TextField fullWidth ref={inputFocus} label="Имя" id="fullWidth" autoFocus={true} value={author} onChange={(item) => {
        setData(pervstate => ({ ...pervstate, author: item.target.value }));
      }} />
      <TextField fullWidth label="Сообщение" id="fullWidth" value={text} onChange={(item) => {
        setData(pervstate => ({ ...pervstate, text: item.target.value }));
      }} />
      <Button type='submit' variant="contained" endIcon={<SendIcon />} > Send </Button>
    </form>
  )
}

const Message = ({ author, text }) => {

  return (
    <div className='oneMes'>
      <hr />
      <h2 className="oneMes-user">{author}</h2>
      <p className="oneMes-text">{text}</p>
      <hr />
    </div>
  )
}