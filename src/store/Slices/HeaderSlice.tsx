import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderStateType {
  hasUser: boolean;
  user: string;
}

const initialState: HeaderStateType = {
  hasUser: false,
  user: '',
};

const HeaderSlice = createSlice({
  name: 'Header',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.hasUser = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.hasUser = false;
      state.user = initialState.user;
    },
  },
});

export const { login, logout } = HeaderSlice.actions;
export default HeaderSlice.reducer;
export type HeaderState = ReturnType<typeof HeaderSlice.reducer>;
