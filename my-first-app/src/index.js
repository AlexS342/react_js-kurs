import React from 'react';                                          //Подключаем react
import ReactDOM from 'react-dom/client';                                        //Подключаем react-dom/client
import './index.css';                                                           //Подключаем react index.css
import App from './App';                                                        //Подключаем react App.js
import reportWebVitals from './reportWebVitals';                                //Подключаем react reportWebVitals.js

const root = ReactDOM.createRoot(document.getElementById('root'));              //В константу root передаем лемент c id 'root' из index.html

root.render(                                                                    //В root вставляем данны из app.js, а render отправляет их в index.html
  //React.StrictMode равносилев use strict в нативном js
  //<App /> получит данные из function App() в файле app.js
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();                                                              //Пока не объеснили
