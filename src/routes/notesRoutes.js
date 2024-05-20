import express from "express"
import NotesController from "../controllers/NotesController.js";

const notesRoutes = express.Router()

notesRoutes.get("/", NotesController.getNotes)


export default notesRoutes