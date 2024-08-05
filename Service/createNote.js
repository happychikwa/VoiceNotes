const fs = require('node:fs/promises')
const path = require('node:path')
const { uuid } = require('uuidv4')
const {databaseConnection} = require('../db/conn')

let filedir = 'directory'

const writeToFile = async (title, content) => {
    
    try{
        filedir = '../VoiceNotes/noterepo/'+title+'.txt'
        await fs.writeFile(filedir,content)
        databaseConnection.query(
            //db query
            "INSERT INTO notes (id, file) VALUES (?,?)",
            //value to insert into the table
            [uuid(),filedir],
            (error, results) => {
                if(error){
                    console.log("write to table error:", error); return;
                }
                console.log("written to table with :", results)
            }
        )
        //databaseConnection.end();
    }
    catch(err){
        console.log(err)
    }
}


module.exports = { writeToFile};