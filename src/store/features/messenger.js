import {createSlice} from '@reduxjs/toolkit';
import {doctor, patient} from '@db/messenger';

export const Messenger = createSlice({
    name: 'messenger',
    initialState: {
        doctor,
        patient,
    },
    reducers: {
        addMessage: (state, action) => {
            const {db, id, message} = action.payload;
            state[db].find(item => item.id === id).chatHistory.push(message);
        }
    }
})

export const {addMessage} = Messenger.actions
export default Messenger.reducer