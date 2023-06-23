import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LoginUser{
    id: number;
    email: string;
    name: string;
    isLoggedIn: boolean;
}

interface LoginState{
    user: LoginUser;
}

const initialState: LoginState = {
    user: {
        id: 0,
        email: '',
        name: '',
        isLoggedIn: false
    },
}

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        addLoginUser: (state, action: PayloadAction<LoginUser>)=>{
            state.user.email = action.payload.email;
            state.user.name = action.payload.name;
            state.user.id = action.payload.id;
            state.user.isLoggedIn = action.payload.isLoggedIn;
        }
    }
});

export default LoginSlice.reducer;
export const {addLoginUser} = LoginSlice.actions;