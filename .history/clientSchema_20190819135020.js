const mongoose = require( 'mongoose' )

mongoose.connect('mongodb://localhost/CRM', { useNewUrlParser: true }).then(() => {
    mongoose.set('useFindAndModify', false);


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
