import * as React from 'react';
import ChatForm from '../Container/ChatForm';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Page = ({ author, removeMessageHandler, message }) => (
    <List sx={{
        width: '100%', maxWidth: 600, bgcolor: 'background.paper'
    }}>
        <h3>{author}</h3>
        {message.map((el, id) =>
            <ListItem key={id} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={el.author}
                        src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary={el.author} secondary={
                    <React.Fragment> {el.message} </React.Fragment>
                } />
                <IconButton aria-label="delete" onClick={() => {
                    removeMessageHandler(id)
                }}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
        )}
        <ChatForm />
    </List>
)

export default Page;