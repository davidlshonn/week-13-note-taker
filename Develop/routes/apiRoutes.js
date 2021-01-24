const router = require("express").Router();
const path = require("path");
const fs = require("fs");
// const store = require("../db/store");

// Should read the `db.json` file and return all saved notes as JSON.
router.get("/api/notes", (req, res) => {
    res.json(notes);
})

router.get("/api/notes/:id", function(req, res){
    res.json(notes[Number(req.params.id)]);
})


// Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
router.post("/api/notes", (req, res) => {
    let noteEntry = req.body;
    let uniqueId = (data.length).toString();
    console.log(uniqueId);
    noteEntry.id = uniqueId;
    data.push(noteEntry);

    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err){
        if (err) throw (err);
    });

    res.json(notes);
});

// Should receive a query parameter containing the id of a note to delete.
router.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    let newId = 0;
    console.log('Deleting note with id: ${noteId}');
    notes = notes.filter(currentNote => {
        return currentNote.id = newId != noteId;
    });
    for (currentNote of notes) {
        currentNote.id = newId.toString();
        newId++;
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;