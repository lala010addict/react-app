var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./mytitle')


var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = function (){
   return (
   <div>
         <MyTitle title = 'Whatevs' color = 'rebeccapurple' />
       <MyTitle title="LOL" color ="papayawhip" />
        <MyTitle title="OMAHDJSHDJASD" color ="#f06d06" />
  </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
    //http-server -p 8080 ./
