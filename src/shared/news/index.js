import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../ducks'
import NewsList from './NewsList'

class News extends Component {
	static initialAction() {
		console.log('initialAction')
		return fetchNews()
	}

	componentDidMount() {
		if (!this.props.news) {
			console.log('Componant did mount')
			this.props.dispatch(News.initialAction())
		}
	}

	render() {
		const { news } = this.props
		return <NewsList news={news} />
	}
}

const mapStateToProps = state => ({
	news: state.newsReducer.news
})

export default connect(mapStateToProps)(News)
