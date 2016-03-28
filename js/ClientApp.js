var div = React.DOM.div
var h1 = React.DOM.h1
var myTitle = React.createClass({
    render: function() {
        return (
            div(null,
                h1(null, 'check out this!')
            )
        )
    }
})

var myTitleFactory = React.createFactory(myTitle)
var ce = React.createElement

var myFirstComponent = (
    div(null,
    	//all the same
        React.createElement(myTitle, null),
        myTitleFactory(null),
        ce(myTitle, null),
        myTitleFactory(null)
    )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))
    //http-server -p 8080 ./
