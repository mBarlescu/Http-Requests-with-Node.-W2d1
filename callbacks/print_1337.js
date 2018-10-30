var getFunc = require('../getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  var lib = {
    a: '4',
    e: '3',
    l: '1',
    o: '0',
    s: '5',
    t: '7',
    ck: 'x',
    er: '0r',
    you: 'j00'
  };
  var newString = '';
  // for(i = 0;i < html.length; i++){
  //   lib.html[i] =
  // }
  for(i = 0; i < html.length; i ++){
    if(!lib[html[i]]){
      newString += html[i];
    } else {
      newString += lib[html[i]];
    }
  }
  console.log(newString);
}

// console.log(printReverse('hello'))
getFunc.getHTML(requestOptions, print1337);
// console.log(print1337('Hello'))