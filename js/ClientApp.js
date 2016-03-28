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


var myFirstComponent = (
    div(null,
       React.createElement(myTitle, null),
       React.createElement(myTitle, null),
       React.createElement(myTitle, null),
       React.createElement(myTitle, null)
    )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))
    //http-server -p 8080 ./
