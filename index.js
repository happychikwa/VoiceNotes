const express = require('express')
const app = express()
const {writeToFile} = require('./Service/createNote.js')
const {logger} = require('./log/logger')
const { deleteNote, deleteFile } = require('./Service/deleteNote')
const {getNote, getAllNotes} = require('./Service/getNotes.js')
const { updateNote } = require('./Service/updateNote.js')
const { empty } = require('uuidv4')

app.use(express.json())

app.post('/note/add', (req, res)=>{
  writeToFile(req.body.title, req.body.content);
    res.send("note created")
})

app.put('/note/edit', async(req, res) => {
    //update note details name
    const noteToEdit = req.body
    updateNote(noteToEdit)
    console.log(retrievedNote)
    // res.send("File edited")
})
app.get('/note/open/{id}', (req,res) => {
   res.send("File openeded")
})
app.get('/note/allnotes', async (req, res) => {
  const notes = await getAllNotes()
  console.log("My notes: ",notes)
  res.json(notes)
})
app.get('/note/note', async(req, res) => {
  const retrievedNote = await getNote(req.body.id)
  res.json(retrievedNote)
})
app.delete('/note/delete', (req, res) => {
  // deleteNote(req.body.noteId)
  deleteFile(req.body.noteId)
  res.send("File deleted")
})

app.listen(3000)
