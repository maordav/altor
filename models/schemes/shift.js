var mongoose = require('mongoose');

var shiftSchema = mongoose.Schema(
    {
        duration: Number,
        working_employees: [ObjectId]
    });

module.exports = shiftSchema;
