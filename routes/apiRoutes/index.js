const router = require("express").Router();
const { notes } = require("../../data/notes.json");
const createNewNote = require('../../lib/notes.js');

router.get("/notes", function (request, response) {
    let results = notes;
    response.json(results);
});

router.post('/notes', function (request, response) {
    request.body.id = notes.length.toString();
    const note = createNewNote(request.body, notes);
    response.json(note);
});

module.exports = router;