var express = require('express');
var router = express.Router();

var messagesController = require('../controllers/messages')

// Route that receives a POST request to /sms
router.route('/api/sms')
  .get(messagesController.index)
  .post(messagesController.create)

router.route('/api/sms/:id')
  .get(messagesController.show)
  .patch(messagesController.update)
  .delete(messagesController.destroy)


module.exports = router
