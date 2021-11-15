const fs = require("fs");
const path = require("path");

function assignId(body, notesArray) {
    body = -1;
    let escape = false;
    while(!escape) {
        body++;
        if (notesArray.findIndex(function (element) {return element.id == body}) === -1) {
            escape = true;
        }
    }
    return body.toString();
}

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
    let index = notesArray.findIndex(function (element) { return element.id == id});
    notesArray.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return body;
}

module.exports = {assignId, createNewNote, deleteNote, findById};