const bodyParser = require('body-parser'); // add body parser //included in express js


//parse application/json
//middleware = Postman/frontend data convert in json

module.exports = {
    bodyParser: bodyParser.json()
}