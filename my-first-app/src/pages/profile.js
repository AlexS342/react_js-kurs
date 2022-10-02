import * as React from 'react';

function Profile() {

    return (
        <>
            <div>
                <h2>Добро пожалоть User!</h2>
                <p>Регистрация пока не доступна.</p>
                <p>Мы уже работаем над этой проблемой.</p>
                <p>Попробуйте зарегистрироватся в другой раз.</p>
                <p>Примерно так будет выглядеть твая анкета после регистрации</p>
            </div>
            <MyProf />
        </>
    );
}

const MyProf = () => {

    return (
        <>
            <img src='logo192.png' alt='ava'></img>
            <h3>Alex</h3>
            <p>Возрост: <span>75 лет</span></p>
            <p>Страна:<span>Россия</span></p>
            <p>Город:<span>Набережные челны</span></p>
            <p>Интересы:<span>Музыка, Гонки, Путешествия</span></p>
            <p>Образование<span>Доктор фантастических наук</span></p>
        </>
    )
}

export default Profile;