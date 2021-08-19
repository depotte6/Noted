const express = require('express');
const fs = require('fs');
const app = express();
//gets all notes
app.get('/api/notes', function(req,res) {
    return res.json(notes);
});
 //read the db.json file and return all saved notes as JSON
//get single note
app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    return res.json(notes);
});

//post recieve a new note to save on req. body
//add it to db.json file
//find a way to give each note a unique ID
app.post('/api/notes', function(req, res) {
    const userNotes = req.Body;

    fs.readFile('Develop/db/db.json', (err, data) => {
        if(err) throw err;
        dbData = JSON.parse(data),
        dbData.push(userNotes),

    });
});

module.exports = api;
