import express from "express"
import NotesController from "../controllers/NotesController.js";

const notesRoutes = express.Router()
const notes = [{id: 0, title: "Note 1", content: "This is the first note"}, {id: 1, title: "Note 2", content: "This is the second note"}]

notesRoutes.get("/", NotesController.getNotes)


export default notesRoutes