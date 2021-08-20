const express = require('express');
const fs = require('fs');
const router = express.Router();
const notesData = require('../Develop/db/db.json');
router.use(express.json());
router.use(express.urlencoded({extended: true }));

const readAndAppend = (content, file) => {
  fs.readFile(file, (err, data) => {
    if(err){
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
}

//gets all notes
router.get('/', (req,res) => {
    return res.json(notesData);
});
 //read the db.json file and return all saved notes as JSON
//get single note
router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json(notesData);
});

//post recieve a new note to save on req. body
//add it to db.json file
//find a way to give each note a unique ID
router.post('/api/notes', (req, res) => {
    //return res.json(notesData);
    const {title, text, id } = req.body;

      if (title && text && id) {
      const newNote = {
        title,
        text,
        id
      }

      readAndAppend(newNote, './db/db.json')

        const response = {
          status: 'success',
          body: newNote,
        }
      res.json(response)
    } else {
      res.json("Couldn't add new note")
    }
  });

module.exports = router;
