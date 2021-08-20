const html = require('express').Router();
const fs = require('fs');
const express =require('express');

//returns notes.html file
html.get('/', (req, res) => {
  readFromFile("./Develop/db/db.json").then((data => res.json(JSON.parse(data))));
});

//app.get('/notes', (req, res) => {
  //  res.sendFile(path.join(__dirname, '../public/notes.html'));
  //});

//returns the index.html
html.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/assets/index.html'));
});


html.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/assets/index.html'));
});

module.exports = html;