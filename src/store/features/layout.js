import {createSlice} from '@reduxjs/toolkit';
import layouts from '../../layouts';

const savedLayout = JSON.parse(localStorage.getItem('widgets'));

export const Layout = createSlice({
    name: 'layout',
    initialState: {
        layout: savedLayout || layouts,
    },
    reducers: {
        saveToLocalStorage: (state) => {
            localStorage.setItem('widgets', JSON.stringify(state.layout));
        },
        updateLayout: (state, action) => {
            const key = action.payload.id;
            state.layout[key].lg = action.payload.layouts;
        },
        resetLayout: (state, action) => {
            const key = action.payload.id;
            state.layout[key].lg = layouts[key].lg;
        }
    }
})

export const {saveToLocalStorage, updateLayout, resetLayout} = Layout.actions
export default Layout.reducer