import * as React from 'react';                                                 //Подключили React
import { render } from 'react-dom';                                             //Подключили render
import { createBrowserRouter, RouterProvider, Routes, Route, Link, } from "react-router-dom";                           //Подключили BrowserRouter, RouterProvider, Routes, Route
import './App.css';                                                             //Подключили файл стилей для App.js
import Home from './pages/home';
import Profile from './pages/profile';
/*material-ui для Navigation*/
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
                <Route path='/chats' element={<h1>Привет! Это заглушка для Chats</h1>}></Route>
                <Route path='*' element={<h1>Ай Ай Ай! Так делать нельзя</h1>}></Route>
            </Routes>
        </>
    );
}

//<Home />
//{<h1>Привет! Это заглушка для Home</h1>}

//Компанент навигации по страницам
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};
const Navigation = () => {

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
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
        </List>
    );
}

export default App;
