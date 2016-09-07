var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
  FromNumber: { type: String},
  FromState: { type : String },
  FromCity : { type : String },
  FromZip: { type: String},
  Body: { type : String },
  date: { type: Date, default : Date.now}
})

module.exports = mongoose.model('Message', MessageSchema);

var Message = mongoose.model("Message", MessageSchema);
