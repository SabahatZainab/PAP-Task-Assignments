const express = require('express'); // require package
const app = express() // express.js minimal setup/container



// GET API - Send response to browser/frontend (get)
app.get('/get', function (req, res) {
  
  res.send('Send Response to Admin Homepage (GET) ')
  
})

// POST API - Send data from frontend to backend (create)
app.post('/post', (req,res) => {
  res.send('Send Data from Admin Homepage to Backend (POST)');
})

// PUT API - Send data from frontend to backend (update - whole data)
app.put('/put', (req,res) => {
  res.send('UPDATE Whole Data in Admin Home Page');
})

// PATCH API - Send data from frontend to backend (update - only few fields)
app.patch('/patch', (req,res) => {
  res.send('Update few fields');
})

// DELETE API - Send data from frontend to backend (delete - whole data)
app.delete('/delete', (req,res) => {
  res.send('Delete Whole Data');
})


app.listen(3000, (err) =>{
  if(err) console.log(err);
  else console.log("Server is Running on PORT 3000");
}); 


//API - Application Programming Interface
//API (GET, POST, PATCH, PUT , DELETE)

//semicolon is optional

//GET API - Send response to browser/frontend

