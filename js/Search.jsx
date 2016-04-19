const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = React.createClass({
	getInitialState() {
		return {
			searchTerm: ''
		}
	},
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
	render() {
		return(
			  <div className='container'>
			  <header className='header'>
			  <h1 className='brand'>svideo</h1>
			  <input value= {this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent}/>
			  </header>
			    <div className='shows'>
			      {data.shows
			      	//searching in both title and description
			      	.filter((show) => `${show.title} ${show.description}`
			      		.toUpperCase()
			      		//if true will keep in the array, if not, then drop from the array
			      		.indexOf(this.state.searchTerm.toUpperCase()) >= 0)
			      	.map((show) => (
			       	 <ShowCard {...show} key={show.imdbID} />
			      ))}
			    </div>
			  </div>
  )
}
})

module.exports = Search














