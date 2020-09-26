const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const clientesSchema = new Schema({
    "name": String,
    "email": String,
    "firstContact": Date,
    "emailType": String,
    "sold": Boolean,
    "owner": String,
    "country": String

})

const Client = mongoose.model('clients', clientesSchema)

module.exports = Client
