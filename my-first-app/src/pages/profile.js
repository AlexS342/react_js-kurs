import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { loginUser, registeringNewUser, removeUser } from '../slices/user';

function Profile() {

    return (
        <>
            <div className='prof'>
                <h2 className='prof-title'>Добро пожалоть User!</h2>
                <RegForm />
            </div>
        </>
    );
}


export default Profile;

const RegForm = () => {

    const isAuth = useAuth().isAuth
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')
    const dispatch = useDispatch();

    return !isAuth ?
        (
            <div className='formReg'>
                <TextField size="small" fullWidth label="Введите e-mail" id="fullWidth" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <TextField size="small" id="outlined-password-input" label="Введите пароль" type="password" autoComplete="current-password" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                <Button type='submit' variant="contained" onClick={() => { dispatch(registeringNewUser({ email, pass, })) }}>
                    Зарегистрироватся
                </Button>
                <Button type='submit' variant="contained" onClick={() => { dispatch(loginUser({ email, pass })) }}>
                    Войти
                </Button>
            </div >
        ) :
        <div>
            <h1>Данные юзера</h1>
            <div>
                <h2>Привет, {email}</h2>
            </div>
            <Button type='submit' variant="contained" onClick={() => { dispatch(removeUser()) }}>
                Выйти
            </Button>
        </div >
}






