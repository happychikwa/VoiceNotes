const {databaseConnection} = require('../db/conn')
const {logger} = require('../log/logger.js')
//get the note
const getNote = async (noteId) => {
    try {
        databaseConnection.query(
            'SELECT * FROM notes WHERE id = (?)',
            [noteId],
            (error, results) => {
                if(error){
                    logger.error(error)
                    return null
                }
                return results[0]
            }
        )
    } catch (error) {
        logger.error(error)
        return null
    }
}

const getAllNotes = () => {
    try {
        databaseConnection.query(
            'SELECT * FROM notes',
            (error, results) => {
                if (error) {
                    logger.error(error)
                    return null
                }
                console.log(results[0])
                return results
            }
        )
    } catch (error) {
        // logger(error)
        return null
    }
}
module.exports = {getAllNotes, getNote}