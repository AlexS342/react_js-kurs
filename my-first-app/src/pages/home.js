import * as React from 'react';

function Home() {

    return (
        <div className='home'>
            <h1 className='home-title'>Добро пожаловать</h1>
            <img className='home-img' src='logo192.png' alt='logo'></img>
            <h2 className='home-subTitle'>Мы используем React</h2>
            <p className='home-p'>Это главная страница</p>
            <p className='home-p'>Она пока пустая, но это временно</p>
        </div>
    );
}

export default Home;