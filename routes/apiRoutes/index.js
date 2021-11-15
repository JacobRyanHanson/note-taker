const router = require("express").Router();
const { notes } = require("../../data/notes.json");
const {createNewNote, deleteNote, findById} = require('../../lib/notes.js');
const fs = require("fs");
const path = require("path");

router.get("/notes", function (request, response) {
    let results = notes;
    response.json(results);
});

router.post('/notes', function (request, response) {
    request.body.id = -1;
    let escape = false;
    while(!escape) {
        request.body.id++;
        if (notes.findIndex(function (element) {return element.id == request.body.id}) === -1) {
            escape = true;
        }
    }
    request.body.id = request.body.id.toString();
    const note = createNewNote(request.body, notes);
    response.json(note);
});

router.delete('/notes/:id', function (request, response) {
    const id = request.params.id;
    let index = notes.findIndex(function (element) { return element.id == id});
    notes.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, '../../data/notes.json'),
        JSON.stringify({ notes: notes }, null, 2)
    );
    response.json(request.body);
});

module.exports = router;