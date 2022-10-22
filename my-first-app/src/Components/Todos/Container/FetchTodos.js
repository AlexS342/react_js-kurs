import * as React from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';

export const FetchTodos = ({ error, status, handleSubmit, inputFocus, clear, handleChange, todos, removeTaskHandler, download }) => {
    if (status === 'pending') {
        return (
            <div className='todos-load'>
                <CircularProgress />
            </div>
        )
    } else if (status === 'rejected') {
        return (
            <div className='todos-error'>
                <h2>Error</h2>
                <div>
                    <p>Детали ошибки: </p>
                    <p>{error}</p>
                </div>
                <Button variant="contained" onClick={() => { download() }}>Обновить</Button>
            </div>
        )
    } else {
        return (
            <div>
                <div className='todos'>
                    <h2>Мои задачи</h2>
                    <form className='form' onSubmit={handleSubmit}>
                        <TextField size="small" ref={inputFocus}
                            fullWidth label="Новая задача" id="fullWidth"
                            value={clear} onChange={handleChange}
                        />
                        <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                            Добавить
                        </Button>
                    </form>
                    {todos.map((e, i) =>
                        <div key={i}>
                            <div className='todos-item'>
                                <FormControlLabel control={<Checkbox defaultChecked />} label={e.title} />
                                <IconButton aria-label="delete" onClick={() => { removeTaskHandler(i) }}><DeleteIcon /></IconButton>
                            </div>
                            <Divider />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}