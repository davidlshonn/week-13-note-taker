const router = require("express").Router();
const path = require("path")

router.get("/api/notes", (req, res ) => {
    //Should read the `db.json` file and return all saved notes as JSON
})

router.post("/api/notes", (req, res) => {
    // Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
})

router.delete("/api/notes/:id", (req, res) => {
    // Should receive a query parameter containing the id of a note to delete.
})

module.exports = router;