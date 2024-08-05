const express = require('express')
const app = express()
const {writeToFile} = require('./Service/createNote.js')
// const mysql = require('mysql')
// const winston = require('winston')
const {logger} = require('./log/logger')
const { deleteNote, deleteFile } = require('./Service/deleteNote')
const {getNote, getAllNotes} = require('./Service/getNotes.js')

// const conn = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'AZNotes'
// })


//       conn.connect((err) => {
//       if(err){
//           // console.log("Connection Error: ", err.stack)
//           logger.error(err.message)
//           return
//       }
//       console.log("connection thread", conn.threadId)
//   })

app.use(express.json())

app.post('/note/add', (req, res)=>{
  writeToFile(req.body.title, req.body.content);
    res.send("note created")
})

app.put('/note/edit/{id}', (req, res) => {
    res.send("File edited")
})
app.get('/note/open/{id}', (req,res) => {
   res.send("File openeded")
})
app.get('/note/allnotes', async (req, res) => {
  const notes = await getAllNotes()
  console.log(notes)
  res.json(notes)
})
app.get('/note/note', (req, res) => {
  res.send(getNote(req.params.id))
})
app.delete('/note/delete', (req, res) => {
  // deleteNote(req.body.noteId)
  deleteFile(req.body.noteId)
  res.send("File deleted")
})

app.listen(3000)
