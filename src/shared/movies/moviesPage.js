import React from 'react'
import { connect } from 'react-redux'
import {
	loadMovs,
	fnSortByRet,
	fnFilterMov,
	fnSearch
} from './moviesActionCreator'
import MoviesList from './moviesList'
import MovSelect from './MovSelect'
import { fnAllFilter } from './moviesAction'
import { getfilterList } from './selectors'

class MoviesPage extends React.Component {
	componentDidMount() {
		console.log('asdsadsadasdsdsa')
		// this.props.dispatch(loadMovs())
		// if (!this.props.movies) {
		if (this.props.match.params.year) {
			console.log('year action')
			this.props.dispatch(loadMovs())
			this.props.dispatch(fnFilterMov(this.props.match.params.year))
		} else {
			console.log('init action')
			this.props.dispatch(MoviesPage.initialAction())
		}

		// }
	}
	static initialAction() {
		return loadMovs()
	}
	constructor(props) {
		super(props);
		(this.handleRetChange = this.handleRetChange.bind(this)),
		(this.handleChange = this.handleChange.bind(this)),
		(this.filterList = this.filterList.bind(this))
	}
	handleRetChange(event) {
		if (event.target.value == 'RL') {
			const SortAsc = {
				FilterData: '',
				filterType: 'ASC'
			}

			this.props.dispatch(fnAllFilter(SortAsc))
		} else {
			const SortDsc = {
				FilterData: '',
				filterType: 'DES'
			}

			this.props.dispatch(fnAllFilter(SortDsc))
		}
	}

	handleChange(value) {
		console.log('Movies page year handleChange')

		this.props.dispatch(fnFilterMov(value))
	}
	filterList(event) {
		this.props.dispatch(fnSearch(event.target.value.toLowerCase()))
	}

	render() {
		if (this.props.hasErrored) {
			return <p>Sorry! There was an error loading the items</p>
		}
		if (this.props.isLoading) {
			return <p>Loading…</p>
		}

		return (
			<div>
				<div className="serachbx">
					<input type="text" onChange={this.filterList} />
				</div>
				<div className="selfilter">
					<select onChange={event => this.handleRetChange(event)}>
						<option value="">Rating</option>
						<option value="RL">Rating Low</option>
						<option value="RH">Rating High</option>
					</select>
					<MovSelect
						onSelectYear={this.handleChange}
						movYear={this.props.year}
					/>
				</div>
				<div>
					<MoviesList movies={this.props.movies} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps  - - -- --')
	console.log(state)
	return {
		movies: getfilterList(state),
		year: state.movies.year,
		isLoading: state.movies.MovisLoading
	}
}

export default connect(mapStateToProps)(MoviesPage)
