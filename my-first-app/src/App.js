import * as React from 'react';                                                 //Подключили React
//import { render } from 'react-dom';                                             //Подключили render
import { Routes, Route, Link } from "react-router-dom";                           //Подключили BrowserRouter, RouterProvider, Routes, Route
import './App.css';                                                             //Подключили файл стилей для App.js
import Home from './pages/home';
import Profile from './pages/profile';
import Chats from './pages/chats';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

function App() {

    return (
        <>
            <p>Навигация</p>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/profile' element={<Profile />}></Route>
                <Route path='/chats' element={<Chats />}>
                    <Route path=':chatId' element={<Chats />}></Route>
                </Route>
                <Route path='*' element={<h1>Ай Ай Ай! Так делать нельзя</h1>}></Route>
            </Routes>
        </>
    );
}

const Navigation = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-label="mailbox folders">
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

export default App;
