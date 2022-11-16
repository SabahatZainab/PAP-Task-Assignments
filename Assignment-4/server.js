require('dotenv').config(); //call first we cannot use this as middleware //environment module
const express = require('express'); // require package
const app = express(); // express.js minimal setup/container

//Boilerplate
const middleware = require('./middleware'); //middlewares
const config = require('./config');     //config
const route = require('./route'); //route


//Middleware

app.use(middleware.bodyParser); //middleware
app.use(route.todos); //router


//Application PORT
const PORT = config.PORT;

app.listen(PORT, (err) =>{
  if(err) console.log(err);
  else console.log(`Server is Running on PORT ${PORT}`);
}); 


//API - Application Programming Interface
//API (GET, POST, PATCH, PUT , DELETE)

//semicolon is optional

//GET API - Send response to browser/frontend

