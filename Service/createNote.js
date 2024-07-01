const fs = require('node:fs/promises')
const path = require('node:path')


const writeToFile = async () => {
    console.log("service created")
    try{
        const content = "example content to be viewed"
        await fs.writeFile('../VoiceNotes/noterepo/text.txt',content)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = { writeToFile};