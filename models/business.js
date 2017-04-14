var mongoose = require('mongoose');
var user = require('./user');

// Define client as a discriminator of user
var businessSchema = user.discriminator('business', mongoose.Schema({
    business: [ObjectId]
}));

// create the model for users and expose it to our app
module.exports = businessSchema;