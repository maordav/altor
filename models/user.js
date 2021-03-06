var mongoose = require('mongoose');
var PassportUtils = require('../config/passport-utils');

var userSchema = new mongoose.Schema(
    {
        full_name: { type: String, required: true, trim: true },
        firstName: String,
        lastName: String,
        email: { type: String, required: true, trim: true },
        password: { type: String, required: true },
        phone: { type: String, trim: true },
        mesaages: [require('../models/schemes/message')]
    },
    { discriminatorKey: 'role' });

// generating a hash
userSchema.methods.generateHash = PassportUtils.generateHash;

// checking if password is valid
userSchema.methods.validPassword = PassportUtils.validPassword;

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
