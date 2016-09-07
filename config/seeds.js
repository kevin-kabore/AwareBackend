require('dotenv').load()
var mongoose = require('./database');
var Message = require('../models/Message');
var messages = [
  {
    FromNumber: '+13474972829',
    FromState: 'NY',
    FromCity: 'BROOKLYN',
    FromZip: '10009',
    Body: 'There has been a robbery on 210th street. Stay clear.'
  },
  {
    FromNumber: '+13474972829',
    FromState: 'NY',
    FromCity: 'BROOKLYN',
    FromZip: '10009',
    Body: 'There is a fire on 118th street. May want to take  detour!'
  },
  {
    FromNumber: '+13474972829',
    FromState: 'NY',
    FromCity: 'BROOKLYN',
    FromZip: '10009',
    Body: 'BK elementary is out early due to the release of the new Bobby Shmurda mixtape. Streets are packed, avoid driving.'
  },
  {
    FromNumber: '+13474972829',
    FromState: 'NY',
    FromCity: 'BROOKLYN',
    FromZip: '10009',
    Body: 'Its LIT! Stay Clear.'
  }
]

Message.remove({}, function  (err){
  if(err) console.log(err);
  Message.create(messages, function(err, messages){
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + messages.length + " messages.");
    }
    process.exit();
  });
});
