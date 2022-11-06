import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { addMessage, } from '../../firebase/crud'

const PresentationChatPage = ({ chatID, data, setValue, value, emailAuth, getPostsHandler }) => {

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
            <div>
                <input placeholder='Сообщение'
                    onChange={(e) => { setValue(e.target.value) }}
                />
                <button onClick={() => { addMessage(value, chatID, emailAuth); getPostsHandler(); }}>
                    Отправить
                </button>
            </div>
        </List>
    )
}

export default PresentationChatPage;