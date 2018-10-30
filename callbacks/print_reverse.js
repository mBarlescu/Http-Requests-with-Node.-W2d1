var getFunc = require('../getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var reverse = ''
  for(i = html.length - 1; i >= 0; i--){
    reverse += html[i];

  }
  console.log(reverse)
}

// console.log(printReverse('hello'))
getFunc.getHTML(requestOptions, printReverse);
