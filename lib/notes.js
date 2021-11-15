const fs = require("fs");
const path = require("path");
// Returns a unique id such that it dosen't already exist in notesArray.
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
// Updates notesArray and rewrites notes.json to include the additional note.
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}
// UpdatesnotesArray and rewrites notes.json to exclued the chosen note (based on id).
function deleteNote(body, id, notesArray) {
    let index = notesArray.findIndex(function (element) { return element.id == id});
    notesArray.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return body;
}

module.exports = {assignId, createNewNote, deleteNote};