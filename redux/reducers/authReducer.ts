import {PayloadAction, createSlice} from '@reduxjs/toolkit'


type AuthSlice = {
    isLogin: boolean
    token: string | null,
    user: object | null,
    isFormLogin : boolean
}

const initialState: AuthSlice = { 
    token: null,
    user: null,
    isLogin : false ,
    isFormLogin : true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setIsFormLogin: (state, action: PayloadAction<boolean>) => {
        console.log(action.payload)
        state.isFormLogin = action.payload;
      },
    },
  });

export const authReducer = authSlice.reducer
export const {setIsFormLogin } = authSlice.actions

export const authSelector = (state: any) => state.authReducer;