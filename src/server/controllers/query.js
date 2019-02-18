const request = require('request');

module.exports = (db) => {

  let get = (req, res) => {

    let apiKey = "bsh6u8q5fdw95yrcy6wkvj75";

    let query = req.query.search;

    let url = `http://api.walmartlabs.com/v1/search?query=${query}&format=json&apiKey=b${apiKey}`

    request(url, function (error, queryResponse, body) {
          console.log('error:', error); // Print the error if one occurred and handle it
          console.log('statusCode:', queryResponse && queryResponse.statusCode); // Print the response status code if a response was received
          if (!error && response.statusCode === 200) {
            res.send(body);
          } else {
            res.status(400).send();
          }
    });
  }

  return {
    get:get
  };
};