import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderStateType {
  hasUser: boolean;
  userEmail: string;
}

const initialState: HeaderStateType = {
  hasUser: false,
  userEmail: '',
};

const HeaderSlice = createSlice({
  name: 'Header',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.hasUser = true;
      state.userEmail = action.payload;
    },
    logout: (state) => {
      state.hasUser = false;
      state.userEmail = initialState.userEmail;
    },
  },
});

export const { login, logout } = HeaderSlice.actions;
export default HeaderSlice.reducer;
export type HeaderState = ReturnType<typeof HeaderSlice.reducer>;
