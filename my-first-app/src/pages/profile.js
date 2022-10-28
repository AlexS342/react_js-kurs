import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { loginUser, registeringNewUser, removeUser } from '../slices/user';
import { collection, getDocs, setDoc } from "firebase/firestore";
import { firestore } from '../firebase/firebase';

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
                <TextField size="small"
                    fullWidth
                    label="Введите e-mail"
                    id="fullWidth" value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <TextField
                    size="small"
                    id="outlined-password-input"
                    label="Введите пароль"
                    type="password"
                    autoComplete="current-password"
                    value={pass} onChange={(e) => { setPass(e.target.value) }}
                />
                <Button
                    type='submit'
                    variant="contained"
                    onClick={() => { dispatch(registeringNewUser({ email, pass, })); }}>
                    Зарегистрироватся
                </Button>
                <Button
                    type='submit'
                    variant="contained"
                    onClick={
                        () => {
                            dispatch(loginUser({ email, pass }))
                        }
                    }>
                    Войти
                </Button>
            </div >
        ) :
        (<div>
            <h1>Данные юзера</h1>
            <div>
                <h2>Привет, {email}</h2>
            </div>
            <RegUser />
            <Button variant="contained" onClick={() => { dispatch(removeUser()) }}>
                Выйти
            </Button>
        </div >)
}

const RegUser = () => {

    const user = useAuth();
    const [allUsers, setAllUsers] = useState();
    const [name2, setName2] = useState('-');
    const [age2, setAge2] = useState('-');
    const [city2, setCity2] = useState('-');

    useEffect(() => { getPostsHandler(); }, []);

    const getPostsHandler = async (idUser) => {
        let data = await getAllUsera();
        setAllUsers(data);
        let b = searchDataUser(data, idUser);
        setName2(b.name);
        setAge2(b.age);
        setCity2(b.city);
    }

    const getAllUsera = async () => {
        const response = await getDocs(collection(firestore, 'users'))
        const arr = response.docs.map(e => e.data())
        return arr
    }

    const searchDataUser = (allUsers, idUser) => {
        let f = {};
        allUsers.map((e) => { if (e.id === idUser) { f = e; } })
        return f;
    }

    const [idUser, setIdUser] = useState(user.id)

    const searchUser = (allUsers, idUser) => {
        let f = false;
        allUsers.map((e) => { if (e.id === idUser) { f = true; } })
        return f;
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const handleChangeName = useCallback((e) => { setName(e.target.value); }, []);
    const handleChangeAge = useCallback((e) => { setAge(e.target.value); }, []);
    const handleChangeCity = useCallback((e) => { setCity(e.target.value); }, []);

    const doSubmit = async (item) => {
        item.preventDefault();
        const BDuser = { email: user.email, id: user.id, name: name, age: age, city: city, };
        let a = searchUser(allUsers, idUser);
        let b = searchDataUser(allUsers, idUser);
        setName2(b.name);
        setAge2(b.age);
        setCity2(b.city);
        if (!a) { await addUser(BDuser); } else { console.log('Вы уже зарегестрированы'); }
    };

    const addUser = async (data) => {
        // const result = await addDoc(collection(firestore, 'users'), data)
        const result = await setDoc(collection(firestore, 'users'), data)
    }

    return (
        <>
            <p>email: {user.email}</p>
            <p>id:  {user.id}</p>
            <p>name: {name2}</p>
            <p>Age: {age2}</p>
            <p>City: {city2}</p>
            <form onSubmit={doSubmit}>
                <input type='text' placeholder='Вася' onChange={handleChangeName} />
                <input type='number' placeholder='30' onChange={handleChangeAge} />
                <input type='text' placeholder='Сочи' onChange={handleChangeCity} />
                <button tupe='submit' >
                    Обновить данные
                </button>
            </form>
        </>
    )
}






