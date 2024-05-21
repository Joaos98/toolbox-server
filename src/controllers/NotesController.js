import db from "../models/index.js";

const NotesController = {
    async getNotes(req, res) {
        try {
            const notes = await db.Note.findAll({
                where: {
                    userId: req.query.userId
                }
            })
            res.status(200).send(notes)
        } catch (err) {
            res.status(400).send(err)
        }
    },

    async createNote(req, res) {
        try {
            const newNote = await db.Note.create(req.body)
            res.status(200).send(newNote.toJSON())
        } catch (err) {
            res.status(400).send("There was an error creating a new note!")
        }
    },

    async deleteNote(req, res) {
        try {
            const note = await db.Note.destroy({
                where: {
                    id: req.query.id
                }
            })
            res.status(200).send()
        } catch (err) {
            res.status(400).send("There was an error trying to delete your note!")
        }
    },

    async updateNotes(req, res) {
        try {
            const notes = req.body.notes
            for (const index in notes) {
                const noteModel = await db.Note.findByPk(notes[index].id)
                noteModel.title = notes[index].title
                noteModel.content = notes[index].content
                await noteModel.save()
            }
            res.status(200).send("All notes were saved!")
        } catch (err) {
            res.status(400).send("There was an error trying to save your notes!")
        }

    }
}

export default NotesController