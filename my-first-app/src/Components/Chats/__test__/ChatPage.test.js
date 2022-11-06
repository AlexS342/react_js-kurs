import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ChatPage from '../ChatPage';

// import { render, screen } from '@testing-library/react';
// import ChatPage from '../ChatPage';
// import { useSelector } from "react-redux";

const mockStore = configureStore([]);

describe('Тестируем контейнер ChatPage', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            state: {
                chatID: 0,
                user: {
                    email: 'amj@mail.ru',
                    token: null,
                    id: null,
                }
            },
        });
        component = renderer.create(
            <Provider store={store}>
                <ChatPage />
            </Provider>
        );
    });

    it('Тест-1', () => {
        // expect(component.toJSON()).toMatchSnapshot();
    });

    // it('Тест-2', () => {

    // });

})

// chatID - должен быть протестирован в slices, считаем, что он правильный
// way - Проверяем заменой chatID

// const [data, setData] = useState([]) - Важно, что внутри!!!

// const getPostsHandler = async () => {    Важна правильная работа!!!
//     let data = await getAllMessage(way)
//     setData(data)
// }

// useEffect(() => { getPostsHandler() }, [chatID]) - в тесте не нуждается

//const emailAuth = useAuth().email; - важно, что внутри !!!

// const [value, setValue] = useState(''); - Важно, что внутри!!!
