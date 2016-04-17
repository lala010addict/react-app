const React = require('react')
const { Link } = require('react-router')

const Landing = function (){
   return (
   <div className = 'app-container'>
     <div className = 'home-info'>
        <h1 className = "title">svideo</h1>
        <input className = 'search' type='text' placeholder= 'search' />
        <Link to='/search' className = 'browse-all'> or Browse All </Link>
     </div>
  </div>

  )
}

module.exports = Landing