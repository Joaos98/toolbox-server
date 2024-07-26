import db from "../models/index.js";

const FitnessController = {
    async getWorkouts(req, res) {
        try {
            const workouts = await db.Workout.findAll({
                where: {
                    userId: req.query.userId
                }
            })
            res.status(200).send(workouts)
        } catch (err) {
            res.status(400).send(err)
        }
    },

    async createWorkout(req, res) {
        try {
            const newWorkout = await db.Workout.create(req.body)
            res.status(200).send(newWorkout.toJSON())
        } catch (err) {
            res.status(400).send("There was an error creating a new workout!")
        }
    },

    async deleteWorkout(req, res) {
        try {
            const note = await db.Workout.destroy({
                where: {
                    id: req.query.id
                }
            })
            res.status(200).send()
        } catch (err) {
            res.status(400).send("There was an error trying to delete your workout!")
        }
    }
}

export default FitnessController