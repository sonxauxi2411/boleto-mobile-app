import {createSlice} from '@reduxjs/toolkit'


type AuthSlice = {
    isLogin: boolean
    token: string | null,
    user: object | null,
}

const initialState: AuthSlice = { 
    token: null,
    user: null,
    isLogin : false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      authData: initialState,
    },
    reducers: {
      
    },
  });

export const authReducer = authSlice.reducer
export const {} = authSlice.actions

export const authSelector = (state: any) => state.authReducer.authData;