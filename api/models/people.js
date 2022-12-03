const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    lastName: String
});

module.exports = mongoose.model('Person', peopleSchema);