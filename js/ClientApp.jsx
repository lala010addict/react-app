const React = require('react')
const ReactDOM = require('react-dom')
// const MyTitle = require('./mytitle')


// const MyTitleFactory = React.createFactory(MyTitle)
// const ce = React.createElement

const App = function (){
   return (
   <div className = 'app-container'>
     <div className = 'home-info'>
        <h1 className = "title">svideo</h1>
        <input className = 'search' type='text' placeholder= 'search' />
        <button className = 'browse-all'> or Browse All </button>
     </div>
  </div>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
    //http-server -p 8080 ./
