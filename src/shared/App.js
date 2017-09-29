import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import routes from './routes'
import './App.css'

class App extends Component {
	render() {
		// console.log(this.props.children)
		return (
			<div>
				<div className="navbar">
					<nav>
						<Link to="/">Home</Link>
						<Link to="/movies">Movies</Link>
						<Link to="/news">News</Link>
					</nav>
				</div>
				<div>
					{routes.map((route, i) => <Route key={i} {...route} />)}
				</div>
			</div>
		)
	}
}

export default App
