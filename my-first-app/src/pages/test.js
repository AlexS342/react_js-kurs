import * as React from 'react';
//import { firestore } from '../firebase/firebase'

import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { /*addUser, createUserThunk, loginThunk,*/ removeUser } from '../slices/user';
import { addPost, getAllPosts } from '../firebase/crud';

const Test = () => {

    return (
        <div>
            <h1>Тестовая страница</h1>
            <p>Учимся работать с базой данных</p>

            <input type='text' />
            <button>Отправить</button>
            <button>Получить</button>

            <DataList />

            <p>После завершения тестов необходимо удалить (исправить) </p>
            <ul>
                <li>App.js, удалить строки №8 и №25 </li>
                <li>Navigation.jsб удалить строки с №40 по №45 включительно</li>
                <li>Удалить файл test.js</li>
            </ul>
        </div>
    )

}

export default Test;

//СТРАНИЦА С ПОСТАМИ
const DataList = () => {
    const dispatch = useDispatch()
    const isAuth = useAuth()
    // стейты для получения данных из firestore (без middleware)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState()
    //состояние для хранения данных о посте, для последующей отправки в firestore
    const [formData, setFormData] = useState({
        body: '',
        user: ''
    })
    //функция обрабатывающая загруженные данные о постах и добавляющая их в data state
    const getPostsHandler = async () => {
        setLoading(true)
        let data = await getAllPosts()
        setLoading(false)
        setData(data)
    }
    //сайд эффект(загрузка постов при монтировании компонента)
    useEffect(() => {
        getPostsHandler()
    }, [])

    return isAuth.isAuth ? (
        <div>
            <h1>Данные юзера</h1>
            <div>
                <h2>Привет, {isAuth.email}</h2>
            </div>
            {/* Кнопка разлогина разлогин происходит локально в приложении без middleware через обычный редьюсер*/}
            <button onClick={() => { dispatch(removeUser()) }}>Выйти из аккаунта</button>
            {/* Контейнер постов */}
            <div style={{ minHeigth: '50vh' }}>
                {/* Инпут для добавления постов */}
                <PostForm formData={formData} setFormData={setFormData} />
                {/* кнопка добавляет посты и выполняет повторый fetch постов чтобы отобразить обновленные данные */}
                <button onClick={() => { addPost(formData); getPostsHandler(); }}>Добавить пост</button>
                {/* Список постов или лодер если грузим */}
                {loading ? <div>Грузим посты</div> : <PostList data={data} user={isAuth.email} />}
            </div>
        </div >
    ) : <Navigate to={'/profile'} />
}

//СПИСОК ПОСТОВ
const PostList = ({ data, user }) => {

    return (
        <>
            {data.map((e, i) => e.user === user ? <div key={i}> <p>{e.body}</p> <hr /> </div> : null)}
        </>
    )
}

//ФОРМА ДОБАВИТЬ ПОСТЫ
const PostForm = ({ formData, setFormData }) => {

    const user = useAuth().email

    return (
        <div>
            <input placeholder='пост' value={formData.body} onChange={(e) => { setFormData({ user, body: e.target.value }) }} />
        </div>
    )
}

