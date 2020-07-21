import { createStore, combineReducers, applyMiddleware } from 'redux'
import MangaReducer from './reducers/mangaReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    MangaReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
