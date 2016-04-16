var React = require('react')
var ReactDOM = require('react-dom')


var div = React.DOM.div
var myTitle = require('./mytitle');
var myTitleFactory = React.createFactory(myTitle)
var ce = React.createElement

var myFirstComponent = (
    div(null,
        //all the same
        React.createElement(myTitle, { title: 'propssss', color: 'purple' }),
        myTitleFactory({ title: 'propssdfdfd', color: 'mediumaquamarine' }),
        ce(myTitle, { title: 'proppppssssssppppssss', color: 'peru' })
    )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))
    //http-server -p 8080 ./
