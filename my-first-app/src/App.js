import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import './StyleApp.css';
//Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
//import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';




function App() {
  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState({ text: '', author: '' });
  const [chatList, setChatList] = useState([
    { name: 'Спорт', id: 1 },
    { name: 'Наука', id: 2 },
    { name: 'Фотография', id: 3 },
    { name: 'Кино', id: 4 },
    { name: 'Отдых', id: 5 },
  ])
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
      <ChatList chatName={chatList} />
      <div className='App-DialogueList'>
        <h2>ChatName</h2>
        <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
        <List className='App-messageList' sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
          {messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} />)}
        </List>
      </div>

    </div>
  );
}

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
    <form className="App-form" onSubmit={submitForm}>
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
    <ListItem className='App-messageItem' alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={author} src="#" />
      </ListItemAvatar>
      <ListItemText
        primary={author}
        secondary={
          <React.Fragment>
            {text}
          </React.Fragment>
        }
      />
    </ListItem >
  );
}

const ChatList = (props) => {

  return (
    <div className='App-chatListWRP'>
      <h2>Чаты:</h2>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {props.chatName.map((el) => (
          <ListItem className='App-messageItem' key={el.id} disableGutters secondaryAction={
            <IconButton aria-label="comment">
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={`${el.name}`} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default App;