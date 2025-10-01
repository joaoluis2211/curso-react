import { createSlice } from "@reduxjs/toolkit";

const inicialState = {
    status: false,
    userDate: null
}

const authSlice = createSlice({
    nome: "auth",
    inicialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userDate = action.payload.userDate;
        },
        logout: (state) => {
            state.status = false;
            state.userDate = null;
        }

    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer