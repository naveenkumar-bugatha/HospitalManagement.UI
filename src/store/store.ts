import {configureStore} from "@reduxjs/toolkit"
import { LoginSlice } from "./features/loginSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const store = configureStore({
    reducer:{
        LoginUser: LoginSlice.reducer
    }
})

export const useAppDispatch:() => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<
ReturnType<typeof store.getState>
> = useSelector;