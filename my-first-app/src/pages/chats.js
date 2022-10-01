import * as React from 'react';
import { render } from 'react-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};
function Chats() {

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat №1" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat №2" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat №3" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat №4" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat №5" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat №6" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Chat №7" />
            </ListItem>
            <Divider />
        </List>
    );
}

export default Chats;