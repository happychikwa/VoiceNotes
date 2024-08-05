const {databaseConnection} = require('../db/conn.js')
const {logger} = require('../log/logger.js')
const fs = require('fs')

const deleteNote = async (noteId) => {
    try {
        databaseConnection.query(
            //sql query
            "DELETE FROM notes WHERE id = (?)",
            //values
            [noteId],
            (error, result) => {
                if(error){
                    logger.error(error)
                }
                logger.info(result)
            }
        )
    } catch (error) {
        logger.error(error)
    }
}

const deleteFile = (noteId) => {
    databaseConnection.query(
        //sql query
        "SELECT file FROM notes WHERE id = (?)",
        [noteId],
        (error, results) => {
            if(error){
                logger(error)
            }
            else{
                fs.unlink(results[0].file, (err) => {
                })
            }
        }
    )
    deleteNote(noteId)
}
module.exports = {deleteFile}