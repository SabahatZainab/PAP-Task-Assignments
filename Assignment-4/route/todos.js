const express = require('express');
const controller = require('../controller');

//Express Routing
const router = express.Router();

// GET API - Send response to browser/frontend (get)
router.get('/', controller.todos.get);

// POST API - Send data from frontend to backend (create) (new data or field updated send to frontend from backend)
router.post('/', controller.todos.post);

// PUT API - Send data from frontend to backend (update - whole data)
router.put('/', controller.todos.put);

// PATCH API - Send data from frontend to backend (update - only few fields)
router.patch('/', controller.todos.patch);

// DELETE API - Send data from frontend to backend (delete - whole data)
router.delete('/', controller.todos.delete);

module.exports = router;