var div = React.DOM.div
var h1 = React.DOM.h1
var myTitle = React.createClass({
    render: function() {
        return (
            div(null,
                h1({ style: { color: this.props.color } }, this.props.title)
            )
        )
    }
})

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
