const {databaseConnection} = require('../db/conn.js')
const {logger} = require('../log/logger.js')

const deleteNote = (noteId) => {
    try {
        databaseConnection.query(
            //sql query
            "DELETE {} FROM notes WHERE id = {?}",
            //values
            [noteId],
            (error, result) => {
                if(error){
                    console.log(error)
                    logger.error(error)
                }
                console.log(result)
                logger.info(result)
            }
        )
        databaseConnection.end()
    } catch (error) {
        console.log(error)
        logger.error(error)
    }
}

module.exports = {deleteNote}