const fs = require('node:fs/promises')
const path = require('node:path')


const writeToFile = async (title, content) => {
    
    try{
        const filedir = '../VoiceNotes/noterepo/'+title+'.txt'
        await fs.writeFile(filedir,content)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = { writeToFile};