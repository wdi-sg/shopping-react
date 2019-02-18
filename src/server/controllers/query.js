const request = require('request');
const apiKey = "bsh6u8q5fdw95yrcy6wkvj75";
module.exports = (db) => {
    let get = (req, res) => {
        let query = req.query['searchKey'];
        let url = `http://api.walmartlabs.com/v1/search?apiKey=${apiKey}&query=${query}`
        request(url, (error, queryResponse, body) => {
            error ? console.log('error:', error) : null; // Print the error if one occurred and handle it
            console.log('statusCode:', queryResponse && queryResponse.statusCode); // Print the response status code if a response was received
            res.send(body);
        });
    }
    return {
        get: get
    };
};