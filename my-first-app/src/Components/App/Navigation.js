import * as React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Navigation = () => {
    return (
        <List className='navigation'
            sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
            component="nav" aria-label="mailbox folders">
            <p className='navigation-header'>Навигация</p>
            <Divider />
            <Link to="/">
                <ListItem button>
                    <ListItemText primary="Главная" />
                </ListItem>
            </Link>
            <Divider />
            <Link to="/profile">
                <ListItem button>
                    <ListItemText primary="Профиль" />
                </ListItem>
            </Link>
            <Divider />
            <Link to="/chats">
                <ListItem button>
                    <ListItemText primary="Чаты" />
                </ListItem>
            </Link>
            <Divider />
        </List>
    );
}

export default Navigation;