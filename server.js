const express = require('express');
const app = express();
const path = require('path');

//const notes = require("./Develop/db/db.json");

app.use(express.static('public'));
app.use('/'. require ('./router/notes.js'));

//get single note
app.get('/api/notes/:id', (req, res) => {
    res.json(notes.filter(notes => notes.id === parseINT(req.params.id)));
});
//gets all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

