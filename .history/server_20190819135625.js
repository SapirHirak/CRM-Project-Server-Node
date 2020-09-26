//require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
let port = 8080
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
let data = require('../data.json')

const router = require('./router/router')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/CRM', { useNewUrlParser: true }).then(() => {
    mongoose.set('useFindAndModify', false);
    app.use( '/', router )
    // const Schema = mongoose.Schema

    // const clientesSchema = new Schema({
    //     "name": String,
    //     "email": String,
    //     "firstContact": Date,
    //     "emailType": String,
    //     "sold": Boolean,
    //     "owner": String,
    //     "country": String

    // })

    // const Client = mongoose.model('clients', clientesSchema)
   // console.log(data)

    // data.map(d => {
    //     let cli = new Client(d)

    //     console.log(d)
    //     cli.save()
    // })
    // app.get('/clinets', (req, res) => {
    //     Client.find({}).exec(function (err, response) {
    //         res.send(response)

    //     })
    // })


    // app.post('/clinets', (req, res) => {
    //     let data = req.body
    //     console.log(data)
    //     let newObj = new Client(data)
    //     newObj.save()
    //     res.end()
    // })

    // app.put('/update' , (req , res) => {
    //     let name = req.body.client
    //     let category = req.body.category
    //     let value = req.body.value
    //     console.log(name)
    //     console.log(category)
    //     console.log(value)
    //     Client.findOneAndUpdate({name: name} , {[category]: value}, {new: true},function(err, doc){
    //         console.log(doc)
    //     })
    //     res.end()
    // })


    app.listen(port, () => console.log(`Running server on port ${port}`))
})