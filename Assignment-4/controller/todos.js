const { db } = require('../config'); //configuration
const { responseApi  } = require('../util'); //it is better to restructure util



exports.get = (req, res) => {
    const body = req.body;
    const args = db.todos[body.id];
    if(args.delete){
     responseApi(res, 400, {success: false, message: 'Task not found'});
    }else{
      responseApi(res, 200, {success: true, message: 'Task found', todos: [args]}); 
    
  }
  }

  exports.post = (req,res) => {
    const body = req.body;
    db.todos.push(body); //for array we use push method

    responseApi(res, 200, {success: true, message: 'Task Added', todos: [db.todos] }); 
    
  }

  exports.put = (req,res) => {
    const body = req.body;
    db.todos[0] = body;
    const arg0 = db.todos[0];
    responseApi(res, 200, {success: true, message: 'Task Updated', todos: [arg0] }); 
     
  }

  exports.patch = (req,res) => {
    const body = req.body;
    const args = db.todos[body.id];
    db.todos[body.id].name = body.name;
    responseApi(res, 200, {success: true, message: 'Task Name Updated', todos: [args] }); 
  }

  exports.delete = (req,res) => {
    const body = req.body;
    if(db.todos[body.id].id === body.id){
      db.todos[body.id].delete = 'true';
      responseApi(res, 200, {success: true, message: 'Task deleted'});
  }else{
      responseApi(res, 400, {success: false, message: 'Task not deleted'}); 
  }
  }