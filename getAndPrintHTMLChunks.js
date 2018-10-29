var https = require('https');

function getAndPrintHTMLChunks (options){

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk received:', data)
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}


getAndPrintHTMLChunks()