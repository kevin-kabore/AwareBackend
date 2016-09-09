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
    FromState: 'Burkina Faso',
    FromCity: 'Ouagadougou',
    FromZip: 'Secteur 10',
    Body: 'Smoke. Smoke everywhere. City wide curfew instilled. Everyone is advised to stay inside, but no one has any idea why or idea of what is actually going on. News Channel is displaying a late night show it would seem it\' s nothing crazy.'
  },
  {
    FromNumber: '+13474972829',
    FromState: 'Burkina Faso',
    FromCity: 'Ouagadougou',
    FromZip: 'Secteur 11',
    Body: 'Still no information on the news channels, curfew still in place. Nobody in the streets, but word of mouth starts to spread. Seems like there\'s been a terrorist attack in the center of the capital.'
  },
  {
    FromNumber: '+13474972829',
    FromState: 'Burkina Faso',
    FromCity: 'Ouagadougou',
    FromZip: '10009',
    Body: 'The national news channel finally has information. There was a terrorist attack in 19 dead, several injured.'
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
