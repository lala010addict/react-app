const path = require('path')

module.exports = {
    context: __dirname,
    entry: './js/ClientApp.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    resolve: {
    	extensions: ['', '.js', '.jsx', '.json']
    },
    stats: {
    	colors: true,
    	
    }
}
