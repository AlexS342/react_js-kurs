import * as React from 'react';
import { Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Profile from './pages/profile';
import Chats from './pages/chats';
import Navigation from './Components/App/Navigation';

function App() {
    return (
        <>
            <Navigation className='Navigation' />
            <div className='windowApp'>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/profile' element={<Profile />}></Route>
                    <Route path='/chats' element={<Chats />}>
                        <Route path=':chatId' element={<Chats />}></Route>
                    </Route>
                    <Route path='*'
                        element={<h1>Ай Ай Ай! Так делать нельзя</h1>}>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
