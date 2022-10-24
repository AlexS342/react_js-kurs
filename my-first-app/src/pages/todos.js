import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from '../slices/todos';
import { FetchTodos } from '../Components/Todos/FetchTodos'
import { addTodos, removeTodos, } from '../slices/todos';

import { useState, useCallback, useRef, } from 'react';


function Todos() {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const { status, error } = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const download = () => {
        dispatch(fetchTodos());
    }

    const addTaskHandler = (value) => { dispatch(addTodos(value)); }
    const removeTaskHandler = (id) => { dispatch(removeTodos(id)); }
    const inputFocus = useRef(null);
    const [value, setValue] = useState('');
    const [clear, setClear] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        setClear(e.target.value);
    }, []);

    const handleSubmit = (item) => {
        setClear('');
        item.preventDefault();
        inputFocus.current.focus();
        addTaskHandler(value);
    }

    return (
        <FetchTodos
            error={error}
            status={status}
            handleSubmit={handleSubmit}
            inputFocus={inputFocus}
            clear={clear}
            handleChange={handleChange}
            todos={todos}
            removeTaskHandler={removeTaskHandler}
            download={download}
        />);
}

export default Todos;