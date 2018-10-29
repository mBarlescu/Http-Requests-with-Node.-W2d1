var https = require('https');

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML (options) {

  var body = '';


  https.get(options, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      body += data;
      console.log(data);
    });

    response.on('end', function () {
      console.log('Response stream complete')
    });
  });
}

getAndPrintHTML(requestOptions)