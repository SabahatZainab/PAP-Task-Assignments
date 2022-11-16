const { db } = require('../config'); //configuration
const { responseApiFalse  } = require('../util'); //it is better to restructure util
const { responseApiTrue  } = require('../util');
const { responsePost  } = require('../util');
const { responsePut  } = require('../util');
const { responsePatch  } = require('../util');
const { responseDelete  } = require('../util');


exports.get = (req, res) => {
    const body = req.body;
    const args = db.todos[body.id];
    if(args.delete){
     responseApiFalse(res, 400, {success: false, message: 'Task not found'});
    }else{
      responseApiTrue(res, 200, {success: true, message: 'Task found'}); 
    
  }
  }

  exports.post = (req,res) => {
    const body = req.body;
    db.todos.push(body); //for array we use push method

    responsePost(res, 200, {success: true, message: 'Task Added', todos: [db.todos] }); //sirf ek pahli data show hn rahi hai
    
  }

  exports.put = (req,res) => {
    const body = req.body;
    db.todos[0] = body;
    const arg0 = db.todos[0];
    responsePut(res, 200, {success: true, message: 'Task Updated', todos: [arg0] }); //correct
     
  }

  exports.patch = (req,res) => {
    const body = req.body;
    const args = db.todos[body.id];
    db.todos[body.id].name = body.name;
    responsePut(res, 200, {success: true, message: 'Task Name Updated', todos: [args] }); 
  }

  exports.delete = (req,res) => {
    const body = req.body;
    if(db.todos[body.id].id === body.id){
      db.todos[body.id].delete = 'true';
      responseDelete(res, 200, {success: true, message: 'Task deleted'}); //correct
  }else{
      responseDelete(res, 400, {success: false, message: 'Task not deleted'}); //correct
  }
  }