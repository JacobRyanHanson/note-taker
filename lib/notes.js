const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function deleteNote(body, id, notesArray) {
    const note = body;
    let index = notesArray.findIndex(function (element) {element.id === id});
    if (index > 0) {
        notesArray.splice(index, 1);
        console.log(notesArray)
        fs.writeFileSync(
            path.join(__dirname, '../data/notes.json'),
            JSON.stringify({ notes: notesArray }, null, 2)
        );
    }
    return note;
}

function findById(id, notesArray) {
    const result = notesArray.filter(function (note) {
        return note.id === id;
    })[0];
    return result;
}

module.exports = {createNewNote, deleteNote, findById};