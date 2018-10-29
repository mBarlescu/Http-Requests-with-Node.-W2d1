var https = require('https');

function getAndPrintHTMLChunks (){

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk received. Length:', data)
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

function getAndPrintHTML () {

  var body = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      body += data;
      console.log(body);
    });

    response.on('end', function () {
      console.log('Response stream complete')
    });
  });
}

getAndPrintHTML()