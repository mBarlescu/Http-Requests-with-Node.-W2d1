var getFunc = require('../getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase())

}

getFunc.getHTML(requestOptions, printLowerCase);
