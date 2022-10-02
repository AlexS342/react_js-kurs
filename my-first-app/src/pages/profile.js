import * as React from 'react';

function Profile() {

    return (
        <>
            <div className='Prof'>
                <h2 className='Prof-title'>Добро пожалоть User!</h2>
                <p className='Prof-p'>Регистрация пока не доступна.</p>
                <p className='Prof-p'>Мы уже работаем над этой проблемой.</p>
                <p className='Prof-p'>Попробуйте зарегистрироватся в другой раз.</p>
                <p className='Prof-p'>Примерно так будет выглядеть твая анкета после регистрации</p>
                <MyProf />
            </div>
        </>
    );
}

const MyProf = () => {

    return (
        <div className='profCart'>
            <img className='profCart-img' src='logo192.png' alt='ava'></img>
            <h3 className='profCart-name'>Alex</h3>
            <p className='profCart-p'>Возрост: <span className='profCart-pSpan'>75 лет</span></p>
            <p className='profCart-p'>Страна:<span className='profCart-pSpan'>Россия</span></p>
            <p className='profCart-p'>Город:<span className='profCart-pSpan'>Набережные челны</span></p>
            <p className='profCart-p'>Интересы:<span className='profCart-pSpan'>Музыка, Гонки, Путешествия</span></p>
            <p className='profCart-p'>Образование<span className='profCart-pSpan'>Доктор фантастических наук</span></p>
        </div>
    )
}

export default Profile;