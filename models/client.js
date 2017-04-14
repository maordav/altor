var mongoose = require('mongoose');
var User = require('./user');

// Define client as a discriminator of user
var clientSchema = User.discriminator('client', new mongoose.Schema(
    {
        appointments_paths:
        [{
<<<<<<< HEAD
            branch: ObjectId,
            employee: ObjectId,
            appointment: ObjectId
        }],
        queue_paths:
        [{
            branch: ObjectId,
            queue: ObjectId
        }]
=======
            branch: mongoose.Schema.Types.ObjectId,
            employee: mongoose.Schema.Types.ObjectId,
            appointment: mongoose.Schema.Types.ObjectId
        }]//,
        //queue_paths:
        //[{
        //    branch: mongoose.Schema.Types.ObjectId,
        //    queue: mongoose.Schema.Types.ObjectId
        //}]
>>>>>>> refs/remotes/origin/DB_Creation
    }));

// create the model for users and expose it to our app
module.exports = clientSchema;
