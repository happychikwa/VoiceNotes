const express = require('express')
const app = express()
const {writeToFile} = require('./Service/createNote')

app.post('/note/add', (req, res)=>{
  writeToFile();
    res.send("note created")
})

app.put('/note/edit/{id}', (req, res) => {
    
})
app.get('/note/delete', async (req, res)=>{
   
})

app.get('/note/open/{id}', (req,res) => {
   
})

app.listen(3000)
