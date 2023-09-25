import { configureStore } from '@reduxjs/toolkit'
import LayoutsReducer from './features/layout'
import TodosReducer from './features/todos'
import CardsReducer from './features/cards'
import MessengerReducer from './features/messenger'

const store = configureStore({
    reducer: {
        'layout': LayoutsReducer,
        'todos': TodosReducer,
        'cards': CardsReducer,
        'messenger': MessengerReducer,
    },
})

export default store