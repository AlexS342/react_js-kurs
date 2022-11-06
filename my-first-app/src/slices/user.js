import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const registeringNewUser = createAsyncThunk(
    'user/someBullshit',
    async ({ email, pass }) => {
        try {
            const userCredit = await createUserWithEmailAndPassword(auth, email, pass)
            const userData = {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken
            }
            return userData
        } catch (e) {
            console.log(e.code, e.message)
        }
    })

export const loginUser = createAsyncThunk(
    'user/someBullshit',
    async ({ email, pass }) => {
        try {
            const userCredit = await signInWithEmailAndPassword(auth, email, pass)
            const userData = {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken
            }
            return userData
        } catch (e) {
            console.log(e.code, e.message)
        }
    })

const initialState = {
    isAuth: false,
    email: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,

    reducers: {
        removeUser: (state) => {
            state.isAuth = false
            state.email = null
            state.token = null
            state.id = null
        }
    },
    extraReducers: {
        [registeringNewUser.pending]: (state) => {
        },
        [registeringNewUser.fulfilled]: (state, action) => {
            return state = action.payload
        },
        [registeringNewUser.rejected]: (state, action) => {
        },
        [loginUser.pending]: (state) => {
        },
        [loginUser.fulfilled]: (state, action) => {
            return state = action.payload
        },
        [loginUser.rejected]: (state, action) => {
        }

    },
});

export const { removeUser, } = userSlice.actions;
export const userReducer = userSlice.reducer;


