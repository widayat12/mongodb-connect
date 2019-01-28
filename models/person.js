const mongoose =  require('mongoose');
const schema = mongoose.Schema;

// create schema and models

const personSchema = new Schema[{
    name: String,
    age: Number
}];

const widayatChar = mongoose.model('widayat', personSchema);

module.exports = widayatChar;