import * as types from './MoviesActionTypes'

//Action for  Movies HasErrored
export function MoviesHasErrored(bool) {
	return {
		type: types.MOVIE_HAS_ERRORED,
		hasErrored: bool
	}
}

//Action for  Movies IsLoading
export function MoviesIsLoading(bool) {
	return { type: types.MOVIE_IS_LOADING, bool }
}
//Action for load Movies Successfully
export function loadMovSuccess(movs) {
	return { type: types.LOAD_MOVIE_SUCCESS, movs }
}

//Action Year
export function loadMovYearSuccess(yearData) {
	return { type: types.LOAD_MOVIE_YEAR, yearData }
}

//Commaon for all filter
export function fnAllFilter(filterType) {
	console.log(filterType)
	return { type: types.LOAD_MOVIE_ALLFILTER, filterType }
}
