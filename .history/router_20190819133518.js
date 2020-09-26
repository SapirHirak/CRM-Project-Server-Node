





app.get('/clinets', (req, res) => {
    Client.find({}).exec(function (err, response) {
        res.send(response)

    })
})


app.post('/clinets', (req, res) => {
    let data = req.body
    console.log(data)
    let newObj = new Client(data)
    newObj.save()
    res.end()
})

app.put('/update' , (req , res) => {
    let name = req.body.client
    let category = req.body.category
    let value = req.body.value
    console.log(name)
    console.log(category)
    console.log(value)
    Client.findOneAndUpdate({name: name} , {[category]: value}, {new: true},function(err, doc){
        console.log(doc)
    })
    res.end()
})
