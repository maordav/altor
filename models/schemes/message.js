var mongoose = require('mongoose');

var messageSchema = mongoose.Schema(
    {
        subject: { type: String, required: true },
<<<<<<< HEAD
        from: { type: ObjectId, required: true },
        to: { type: ObjectId, required: true },
=======
        from: { type: mongoose.Schema.Types.ObjectId, required: true },
        to: { type: mongoose.Schema.Types.ObjectId, required: true },
>>>>>>> refs/remotes/origin/DB_Creation
        content: String,
        has_read: { type: Boolean, default: false },
        sent_time: { type: Date, default: Date.now }
    });

module.exports = messageSchema;
