import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: null,
    },
    reducers: {
        login: (state, action) => {
            state.login = action.payload
        },
        logout: (state) => {
            state.login = null;
        }
    }
})

export const {login, logout} = loginSlice.actions;
export const selectLogin = (state) => state.login.login;

export default loginSlice;