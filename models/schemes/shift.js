var mongoose = require('mongoose');

var shiftSchema = mongoose.Schema(
    {
        duration: Number,
<<<<<<< HEAD
        working_employees: [ObjectId]
=======
        working_employees: [mongoose.Schema.Types.ObjectId]
>>>>>>> refs/remotes/origin/DB_Creation
    });

module.exports = shiftSchema;
