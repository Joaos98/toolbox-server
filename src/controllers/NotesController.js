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
    }
}

export default NotesController