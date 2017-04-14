var mongoose = require('mongoose');
var User = require('./user');

// Define client as a discriminator of user
var clientSchema = User.discriminator('client', new mongoose.Schema(
    {
        appointments_paths:
        [{
            branch: ObjectId,
            employee: ObjectId,
            appointment: ObjectId
        }],
        queue_paths:
        [{
            branch: ObjectId,
            queue: ObjectId
        }]
    }));

// create the model for users and expose it to our app
module.exports = clientSchema;
