import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface User {
    token: string;
    email: string;
}
  
interface LoginStateType {
    isLogin: boolean;
    user: User;
}

const initialState: LoginStateType = {
    isLogin: false,
    user: {
      token: '',
      email: '',
    }
}


const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
      setLogin: (state, action: PayloadAction<User>) => {
        state.isLogin = true;
        state.user = action.payload;
      },
      setLogon: (state) => {
        state.isLogin = false;
        state.user = initialState.user;
      },
    },
  });
  
  export const { setLogin, setLogon } = LoginSlice.actions;
  export default LoginSlice.reducer;
  export type LoginState = ReturnType<typeof LoginSlice.reducer>;