var getFunc = require('./getHTML');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getFunc.getHTML(requestOptions, getFunc.printHTML)