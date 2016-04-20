const React = require('react')
const ShowCard = require('./ShowCard')
// const data = require('../public/data')
const { object, string} = React.PropTypes
const Header = require('./Header')
const {connector} = require('./Store')

const Search = React.createClass({
	// getInitialState() {
	// 	return {
	// 		searchTerm: ''
	// 	}
	// },
	propTypes:{
		route: object,
		searchTerm: string
	},
  // handleSearchTermChange (searchTerm) {
  //   this.setState({ searchTerm: searchTerm })
  //   // same to this.setState({ searchTerm})
  // },
	render() {
		return(
			  <div className='container'>
			<Header 
			// handleSearchTermChange = {this.handleSearchTermChange}
			// 	searchTerm={this.state.searchTerm} 
				showSearch = {true} />
			    <div className='shows'>
			      {this.props.route.shows
			      	//searching in both title and description
			      	.filter((show) => `${show.title} ${show.description}`
			      		.toUpperCase()
			      		//if true will keep in the array, if not, then drop from the array
			      		.indexOf(this.props.searchTerm.toUpperCase()) >= 0)
			      	.map((show) => (
			       	 <ShowCard {...show} key={show.imdbID} />
			      ))}
			    </div>
			  </div>
  )
}
})

module.exports = connector(Search)














