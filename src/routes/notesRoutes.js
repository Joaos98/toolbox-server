import express from "express"
import NotesController from "../controllers/NotesController.js";

const notesRoutes = express.Router()

notesRoutes.get("/", NotesController.getNotes)
notesRoutes.post("/", NotesController.createNote)
notesRoutes.delete("/", NotesController.deleteNote)
notesRoutes.put("/", NotesController.updateNotes)


export default notesRoutes