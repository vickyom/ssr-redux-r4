import * as types from "./MoviesActionTypes";
// import initialState from './initialState';

export default function movies(
    state = { list: [], year: [], Filter: "" },
    action
) {
    switch (action.type) {
        case types.LOAD_MOVIE_SUCCESS:
            return { ...state, list: action.movs };

        case types.LOAD_MOVIE_YEAR:
            return { ...state, year: action.yearData };

        case types.MOVIE_IS_LOADING:
            return { ...state, MovisLoading: action.bool };

        case types.MOVIE_HAS_ERRORED:
            return { ...state, MovishasErrored: action.hasErrored };

        case types.LOAD_MOVIE_ALLFILTER:
            return { ...state, Filter: action.filterType };

        default:
            return state;
    }
}
