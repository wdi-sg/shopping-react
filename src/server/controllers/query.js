const request = require('request');

const query = {
  get: (req, res) => {
    let apiKey = 'ncmqcz64ae8mpafum7y3by8b';

    let query = req.query.search;

    let url = `http://api.walmartlabs.com/v1/search?apiKey=${apiKey}&&query=${query}`;

    request(url, function(error, queryResponse, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', queryResponse && queryResponse.statusCode); // Print the response status code if a response was received

      res.send(body);
    });
  }
};

module.exports = query;
