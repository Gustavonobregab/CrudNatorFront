import {createSlice} from '@reduxjs/toolkit'


const HeaderSlice = createSlice({
    name: 'Header',
    initialState: {
        hasUser: false,
        user: {
            id: '',
            name: '',
            email: '',
        },
        modal: false,

    },
    reducers: {
        login: (state, action) => {
            state.hasUser = true
            state.user = action.payload
        },
        logout: (state) => {
            state.hasUser = false
            state.user = {
                id: '',
                name: '',
                email: '',
            }
        },
        toggleModal: (state) => {
            state.modal = !state.modal
        }
    },
});

export const { login, logout, toggleModal } = HeaderSlice.actions;

export default HeaderSlice.reducer;
