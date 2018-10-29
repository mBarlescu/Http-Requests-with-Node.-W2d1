var https = require('https');

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };


module.exports = {
  getHTML: function (options, callback) {
  var body = '';
  https.get(options, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      body += data;
      callback(data);
    });

    response.on('end', function () {
      console.log('Response stream complete')
    });
  });
},
  printHTML: function (html) {
    console.log(html);
  }
}

// getHTML(requestOptions, printHTML)