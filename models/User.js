var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  number: {type: String, required:true, unique:true},
  email: {type: String, required:true, unique:true},
  firstName: {type: String},
  lastName: {type: String},
  admin: {type: Boolean, default: false}
})

// add bcrypt hashing to model (works on a password field)!
UserSchema.plugin(require('mongoose-bcrypt'));

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
UserSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
