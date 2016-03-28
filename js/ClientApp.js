var div = React.DOM.div
var h1 = React.DOM.h1
var myTitle = React.createClass({
    render: function() {
        return (
            div(null,
                h1(null, this.props.title)
            )
        )
    }
})

var myTitleFactory = React.createFactory(myTitle)
var ce = React.createElement

var myFirstComponent = (
    div(null,
    	//all the same
        React.createElement(myTitle, {title: 'propssss'}),
        myTitleFactory({title: 'propssdfdfd'}),
        ce(myTitle, {title: 'proppppssssssppppssss'})
    )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))
    //http-server -p 8080 ./
