import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';                                                             //импортируем App.css
import './StyleApp.css';
//из material-ui для полей ввода "пользователь (author)" и "сообщение (text)"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//из material-ui для кнопки "отправить"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const superMess = [
    { author: 'Jon', text: "Hi! What's up?" },
    { author: 'Ken', text: "Normal. I'm going to school." },
    { author: 'Mery', text: 'Are you out of your mind? Today is the day off!' }

  ]
  const [messageList, setMessageList] = useState(superMess);
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
      <Button variant="contained">Contained</Button>
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
      <div className='massageList'>
        {messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} />)}
      </div>
    </div>
  );
}

export default App;

const Form = ({ data, setData, setMessage }) => {

  const { text, author } = data;

  const submitForm = (item) => {
    console.log(item)
    item.preventDefault()
    if (text.length > 0) {
      setMessage(prevent => [...prevent, { text, author }])
      console.log(setMessage)
    }

    setData({ text: '', author: '' })
  }

  return (
    <form onSubmit={submitForm}>
      <input placeholder="Имя" value={author} onChange={(item) => {
        setData(pervstate => ({ ...pervstate, author: item.target.value }));
      }} />

      <input placeholder="Текст" value={text} onChange={(item) => {
        setData(pervstate => ({ ...pervstate, text: item.target.value }));
      }} />

      <button type='submit'>Отправить</button>
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

/* Код material-ui для вставки простого input:

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <>
      <Box sx={{ width: 500, maxWidth: '100%', }}>
        <TextField fullWidth label="Имя" id="fullWidth" />
      </Box>
      <Box sx={{ width: 500, maxWidth: '100%', }}>
        <TextField fullWidth label="Сообщение" id="fullWidth" />
      </Box>
    </>
  );
}
*/

/*Код material-ui для вставки простой кнопки
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Contained</Button>    //Вариант 1
      <Button variant="outlined">Outlined</Button>      //Вариант 2
    </Stack>
  );
}
*/