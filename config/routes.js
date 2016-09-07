var express = require('express');
var router = express.Router();

var messagesController = require('../controllers/messages')
var usersController = require('../controllers/users')

//Require auth token for users
var token = require('./token_auth')

//Routes for messages/sms
// Route that receives a POST request to /sms
router.route('/api/sms')
  .get(messagesController.index)
  .post(messagesController.create)

router.route('/api/sms/:id')
  .get(messagesController.show)
  .patch(messagesController.update)
  .delete(messagesController.destroy)


//Routes/resources for users
router.post('/api/users', usersController.create)
router.get('/users/me', token.authenticate, usersController.me)

router.post('/token', token.create)

module.exports = router
