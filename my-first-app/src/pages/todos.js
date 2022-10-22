import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from '../slices/todos';
import { FetchTodos } from '../Components/Todos/Container/FetchTodos'
import { addTodos, removeTodos, /*statusTodos*/ } from '../slices/todos';
// import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
import { useState, useCallback, useRef, } from 'react';
// import TextField from '@mui/material/TextField';
// import SendIcon from '@mui/icons-material/Send';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CircularProgress from '@mui/material/CircularProgress';

function Todos() {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const { status, error } = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    //Кнопка, перенести в error
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

// const FetchTodos = ({ error, status, handleSubmit, inputFocus, clear, handleChange, todos, removeTaskHandler, download }) => {
//     if (status === 'pending') {
//         return (
//             <>
//                 <h1>Loading...</h1>
//                 <CircularProgress />
//             </>
//         )
//     } else if (status === 'rejected') {
//         return (
//             <>
//                 <h1>Error</h1>
//                 {error}
//                 <Button variant="contained" onClick={() => { download() }}>Обновить</Button>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <div className='todos'>
//                     <h2>Мои задачи</h2>
//                     <form className='form' onSubmit={handleSubmit}>
//                         <TextField size="small" ref={inputFocus}
//                             fullWidth label="Новая задача" id="fullWidth"
//                             value={clear} onChange={handleChange}
//                         />
//                         <Button type='submit' variant="contained" endIcon={<SendIcon />}>
//                             Добавить
//                         </Button>
//                     </form>
//                     {todos.map((e, i) =>
//                         <div key={i}>
//                             <div className='todos-item'>
//                                 <FormControlLabel control={<Checkbox defaultChecked />} label={e.title} />
//                                 <IconButton aria-label="delete" onClick={() => { removeTaskHandler(i) }}><DeleteIcon /></IconButton>
//                             </div>
//                             <Divider />
//                         </div>
//                     )}
//                     {/* <Button variant="contained" onClick={() => { download() }}>Обновить</Button> */}
//                 </div>
//             </>
//         )
//     }
// }