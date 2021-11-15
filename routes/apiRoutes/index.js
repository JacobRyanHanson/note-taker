const router = require("express").Router();
const { notes } = require("../../data/notes.json");

router.get("/notes", function (request, response) {
    let results = notes;
    response.json(results);
});

module.exports = router;