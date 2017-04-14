var mongoose = require('mongoose');

var shiftSchema = mongoose.Schema(
    {
        duration: Number,
        working_employees: [mongoose.Schema.Types.ObjectId]
    });

module.exports = shiftSchema;
