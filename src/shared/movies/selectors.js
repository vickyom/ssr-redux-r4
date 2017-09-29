import { createSelector } from "reselect";
var _ = require("lodash");

const getVisibilityFilter = state => state.movies.Filter;
const getMovies = state => state.movies;

export const getfilterList = createSelector(
    [getVisibilityFilter, getMovies],
    (filter, Data) => {
        console.log("getfilterList - - - -- -- ");
        console.log(filter.filterType);
        switch (filter.filterType) {
            case "SHOW_ALL":
                return Data.list.results;

            case "ASC":
                let sortAscData = Data.list.results
                    .slice()
                    .sort((first, second) => {
                        return (
                            parseFloat(first.vote_average) -
                            parseFloat(second.vote_average)
                        );
                    });
                return sortAscData;

            case "DES":
                let sortDesData = Data.list.results
                    .slice()
                    .sort((first, second) => {
                        return (
                            parseFloat(second.vote_average) -
                            parseFloat(first.vote_average)
                        );
                    });
                return sortDesData;

            case "YEAR":
                let MovData = _.filter(Data.list.results, function(arrMovData) {
                    let intYear = arrMovData.release_date.split("-")[0];
                    return intYear == filter.FilterData;
                });
                return MovData;
            case "SEARCH":
                let updatedList = Data.list.results.filter(function(item) {
                    return (
                        item.original_title
                            .toLowerCase()
                            .search(filter.FilterData) !== -1
                    );
                });
                return updatedList;

            default:
                return [];
        }
    }
);
