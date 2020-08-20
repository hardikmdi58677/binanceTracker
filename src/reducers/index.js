import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import cryptoReducer from "./cryptoReducer"
import thunk from "redux-thunk"


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers({
    crypto: cryptoReducer,
}), composeEnhancer(applyMiddleware(thunk)))

export default store
