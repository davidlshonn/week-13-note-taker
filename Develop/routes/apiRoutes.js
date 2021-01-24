const router = require("express").Router();
const path = require("path");
const fs = require("fs");
// const store = require("../db/store");

router.get("/api/notes", (req, res) => {
    res.json(notes);
})

router.get("/api/notes/:id", function(req, res){
    res.json(notes[Number(req.params.id)]);
})


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

// router.post("/api/notes", (req, res) => {
//     let noteEntry = req.body;
//     notes.push(noteEntry);
//     updateDb();
//     return console.log("Your note has been added: " + noteEntry.title);
// })

// Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client


// router.delete("/api/notes/:id", (req, res) => {
//     // Should receive a query parameter containing the id of a note to delete.
// })

module.exports = router;
