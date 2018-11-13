const request = require('request');

module.exports = {
  get: (req, res) => {
    const apiKey = 'p6macs9emuek26apm32yp4g7';
    //query is a reserved key, while search refers to the object key
    const query = req.query.search;
    const url = `http://api.walmartlabs.com/v1/search?apiKey=${apiKey}&query=${query}`;

    request(url, function (error, queryResponse, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', queryResponse && queryResponse.statusCode); // Print the response status code if a response was received
          res.send(body);
    });
   }
};

