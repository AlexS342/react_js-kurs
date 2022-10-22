import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const Form = ({ handleSubmit, inputFocus, clear, handleChange }) => (
    <form className='form' onSubmit={handleSubmit}>
        <TextField size="small" ref={inputFocus}
            fullWidth label="Ваше сообщение" id="fullWidth"
            value={clear} onChange={handleChange}
        />
        <Button type='submit' variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
    </form>
)

export default Form;