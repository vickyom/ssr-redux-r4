import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
// import rootReducer from "./ducks";

const configureStore = preloadedState =>
	createStore(rootReducer, preloadedState, applyMiddleware(thunk))

export default configureStore
