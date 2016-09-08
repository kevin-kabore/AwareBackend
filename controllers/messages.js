var Message = require('../models/Message')

module.exports = {
  index: index,
  create: create, //inbound text
  show: show,
  update: update,
  destroy: destroy
}

//GET /api/sms
function index(req, res){
  Message.find({}, function(err, messages){
    if (err) res.json({message: 'Could not find messages b/c: ' + err})

    res.json(messages);
  }).select('-__v');
}

//function to save inbound text to database
// POST /api/sms
function create(req, res){
  // console.log(req.body);
  var message = new Message;
  message.FromNumber = req.body.From
  message.FromState = req.body.FromState
  message.FromCity = req.body.FromCity
  message.FromZip = req.body.FromZip
  message.Body = req.body.Body
  console.log(message);

  // res.set('Content-Type', 'text/plain')
  // res.send('Your community thanks you for helping everyone be more Aware.')
  //Figure out how to respond to user without calling rs. more than once
  message.save(function(err){
    if (err) res.json({msg: 'Could not create message b/c: ' + err});
    res.json({message: message})

  })
}

//GET /api/sms/:id
function show(req, res){
  var id = req.params.id
  console.log(id);
  Message.findById(id, function(err, message){
    if (err) res.json({message: 'Could not find message b/c: '+ err})
    res.json({message: message})
  }).select('-__v');
}

//PATCH /api/sms/:id
function update(req, res){
  var id = req.params.id
  Message.findById(id, function(err, message){
    if (err) res.json({msg: 'could not find message b/c: ' + err})

    if (req.body.FromState) message.FromState = req.body.FromState;
    if (req.body.FromCity) message.FromCity = req.body.FromCity;
    if (req.body.FromZip) message.FromZip = req.body.FromZip;
    if (req.body.Body) message.Body = req.body.Body


    message.save(function(err){
      if (err) res.json({message:'could not save b/c: ' + err})
      res.json({messsage:'successfully updated'})
    })
  })
}

//DELETE /api/sms/:id

function destroy(req, res){
  var id = req.params.id
  Message.remove({_id: id}, function(err){
    if (err) res.json({message:'could not remove message b/c: ' + err})
    res.json({message:'message successfully deleted.'})
  })
}
