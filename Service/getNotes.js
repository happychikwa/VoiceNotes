const {databaseConnection} = require('../db/conn')
const {logger} = require('../log/logger.js')
//get the note
const getNote = async (noteId) => {
    try {
        const [results, fields] = databaseConnection.query('SELECT * FROM notes WHERE id = (?);', [noteId])
        return results
    } catch (error) {
        logger.error(error)
        return null
    }
}

const getAllNotes = async () => {
    try {
        const [results, fields] = await databaseConnection.query('SELECT * FROM notes;');
       return results
    } catch (error) {
        logger(error)
        return null
    }
}
module.exports = {getAllNotes, getNote}