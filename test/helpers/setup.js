require('babel-register')
require('bable-polyfill')
global.document = require('jsdom').jsdom('<body><div id='app'></div></body>')
global.window = document.defaultView
global.navigator = window.navigator