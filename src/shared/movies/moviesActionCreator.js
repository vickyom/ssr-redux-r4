import 'isomorphic-fetch'

import {
    MoviesIsLoading,
    loadMovSuccess,
    loadMovYearSuccess,
    fnAllFilter
} from './moviesAction'

//Action Cretor that call API

export const loadMovs = () => (dispatch, getState) => {
    console.log(1)
    console.log('w')
    // This condtion check if data avl in store or not.Then call API
    if (fnCheckState(getState())) {
        dispatch(MoviesIsLoading(true))
        // API call
        return fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key={key}'
        )
            .then(response => response.json())
            .then(movs => {
                // Create the seprate resultset for
                let release_date1 = []
                for (let value of movs.results) {
                    value = value.release_date.split('-')[0]
                    release_date1.push(value)
                }
                let uniqueNames = Array.from(new Set(release_date1))

                dispatch(loadMovSuccess(movs))
                dispatch(loadMovYearSuccess(uniqueNames))
                dispatch(MoviesIsLoading(false))
                const ShowAllData = {
                    FilterData: '',
                    filterType: 'SHOW_ALL'
                }
                dispatch(fnAllFilter(ShowAllData))
            })
        // }
    }
}

// This function check the data in store
function fnCheckState(state) {
    const movies = state.movies

    let shouldFetch = true
    if (
        (movies.list.results && movies.list.results.length > 0) ||
                                movies.isFetching
    )
        shouldFetch = false
    return shouldFetch
}

//This function set year which is coming from onchange
export function fnFilterMov(SelYear) {
    return dispatch => {
        const YearData = {
            FilterData: SelYear,
            filterType: 'YEAR'
        }
        dispatch(fnAllFilter(YearData))
    }
}

//This function is use for search
export function fnSearch(SearchData) {
    return (dispatch, getState) => {
        const SearData = {
            FilterData: SearchData,
            filterType: 'SEARCH'
        }
        dispatch(fnAllFilter(SearData))
        // dispatch(fnSearchText(SearchData));
    }
}

//This function set the cookie
export function fnSetFavMov(movID) {
    if (!getCookie('FavMov').includes(movID)) {
        let allMovID = ''
        allMovID = getCookie('FavMov') + '|' + movID
        createCookie('FavMov', allMovID)
    }
}
