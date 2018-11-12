const request = require('request');

const {apiKey} = require('../config.json');

module.exports = {
  get: (req, res) => {
    let query = req.query.search;

    let url = `http://api.walmartlabs.com/v1/search?apiKey=${apiKey}&query=${query}`;

    request(url, (error, response, body) => {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      if (!error && response.statusCode === 200) {
        res.send(body);
      } else {
        res.status(400).send();
      }
    });
  }
};
