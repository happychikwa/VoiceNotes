const { writeFile } = require('fs/promises')
const {getNote} = require('../Service/getNotes')
const databaseConnection = require('../db/conn')
const logger = require('../log/logger')
const fs = require('fs')
const { get } = require('http')

const updateNote = async (noteObject) => {
    if(noteObject == null) return 'empty'
    const todayDate = new Date.toISOString()
    console.log("The Date function",todayDate)
    
    try {
        getNote(noteObject.id).then(
            (result) => {
                //update db details on id
                databaseConnection.query(
                    'UPDATE notes SET file = (?), updated_at = (?) WHERE id = (?);',[result.file, todayDate, result.id]
                )
                fs.writeFile(result.file,noteObject.body)
            }
        )
        
        //update file directory        
        fs.writeFile(no)
    } catch (error) {
        logger(error)
    }
   
}

module.exports = {updateNote}