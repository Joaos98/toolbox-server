import express from "express"

const notesRoutes = express.Router()
const notes = [{id: 0, title: "Note 1", content: "This is the first note"}, {id: 1, title: "Note 2", content: "This is the second note"}]

notesRoutes.get("/", (req, res) => {
    res.send(notes)
})


export default notesRoutes