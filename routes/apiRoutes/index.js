const router = require("express").Router();
const { notes } = require("../../data/notes.json");
const {assignId, createNewNote, deleteNote} = require('../../lib/notes.js');

router.get("/notes", function (request, response) {
    let results = notes;
    response.json(results);
});

router.post('/notes', function (request, response) {
    request.body.id = assignId(request.body.id, notes);
    const note = createNewNote(request.body, notes);
    response.json(note);
});

router.delete('/notes/:id', function (request, response) {
    const note = deleteNote(request.body, request.params.id, notes);
    response.json(note);
});

module.exports = router;