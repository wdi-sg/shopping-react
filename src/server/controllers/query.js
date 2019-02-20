const request = require('request');
const apiKey = "bsh6u8q5fdw95yrcy6wkvj75";
module.exports = (db) => {

    let queryToURL = obj => {
        return Object.keys(obj).map(key => {
            if (obj[key] !== ''){
                return '&' + key + '=' + obj[key]
            }
        }).join('')
    }

    let get = (req, res) => {        
        console.log(queryToURL(req.query))
        let url = `http://api.walmartlabs.com/v1/search?apiKey=${apiKey}${queryToURL(req.query)}&numItems=20`
        console.log(url)
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