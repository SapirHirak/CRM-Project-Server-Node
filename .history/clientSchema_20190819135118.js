const mongoose = require( 'mongoose' )

const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/CRM', { useNewUrlParser: true }).then(() => {
    mongoose.set('useFindAndModify', false);



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
