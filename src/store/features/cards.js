import {createSlice} from '@reduxjs/toolkit'
import {cards} from '@db/cards';
import {nanoid} from 'nanoid';

export const Cards = createSlice({
    name: 'cards',
    initialState: {
        cards: cards,
    },
    reducers: {
        addCard: (state, action) => {
            state.cards.unshift({
                title: action.payload.title,
                number: action.payload.number,
                exp: action.payload.exp,
                cvv: action.payload.cvv,
                id: nanoid(5),
                type: "mastercard",
                main: false,
                archived: false
            });
        },
        removeCard: (state, action) => {
            state.cards = state.cards.filter(card => card.id !== action.payload.id);
        },
        setMain: (state, action) => {
            state.cards.forEach(card => { card.main = false });
            state.cards.find(card => card.id === action.payload.id).main = true;
        },
        setArchived: (state, action) => {
            const card = state.cards.find(card => card.id === action.payload.id);
            card.archived = !card.archived;
        },
        setTitle: (state, action) => {
            const card = state.cards.find(card => card.id === action.payload.id);
            card.title = action.payload.title.trim();
        }
    }
})

export const {addCard, removeCard, setArchived, setMain, setTitle} = Cards.actions
export default Cards.reducer