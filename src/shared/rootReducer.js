import { combineReducers } from 'redux'
import movies from './movies/moviesReducers'
import newsReducer from './ducks'

const rootReducer = combineReducers({
	movies,
	newsReducer
})

export default rootReducer
