import db from "../models/index.js";

const FitnessController = {
    async getWorkouts(req, res) {
        try {
            const workouts = await db.Workout.findAll({
                where: {
                    userId: req.query.userId
                },
                order: [['date', 'DESC']]
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
    },

    async getBodyCompositionMeasurements(req, res) {
        try {
            const measurements = await db.BodyCompositionMeasurements.findAll({
                where: {
                    userId: req.query.userId
                },
                order: [['date', 'DESC']]
            })
            res.status(200).send(measurements)
        } catch (err) {
            res.status(400).send(err)
        }
    },

    async createBodyCompositionMeasurement(req, res) {
        try {
            const newMeasurement = await db.BodyCompositionMeasurements.create(req.body)
            res.status(200).send(newMeasurement.toJSON())
        } catch (err) {
            res.status(400).send("There was an error creating a new body composition measurement!")
        }
    },

    async deleteBodyCompositionMeasurement(req, res) {
        try {
            const measurement = await db.BodyCompositionMeasurements.destroy({
                where: {
                    id: req.query.id
                }
            })
            res.status(200).send()
        } catch (err) {
            res.status(400).send("There was an error trying to delete your body composition measurement!")
        }
    },

    async getUserMeasurementParameters(req, res) {
        try {
            const parameters = await db.UserMeasurementParameters.findAll({
                where: {
                    userId: req.query.userId
                }
            })
            res.status(200).send(parameters)
        } catch (err) {
            res.status(400).send(err)
        }
    },

    async createUserMeasurementParameters(userId) {
        try {
            await db.UserMeasurementParameters.create({userId: userId})
        } catch (err) {
            throw err;
        }
    },

    async updateUserMeasurementParameters(req, res) {
        try {
            const updatedParameters = req.body.userMeasurementParameters
            const parametersModel = await db.UserMeasurementParameters.findByPk(updatedParameters.id)
            parametersModel.lowerBodyWeight = updatedParameters.lowerBodyWeight
            parametersModel.higherBodyWeight = updatedParameters.higherBodyWeight
            parametersModel.lowerBodyWater = updatedParameters.lowerBodyWater
            parametersModel.higherBodyWater = updatedParameters.higherBodyWater
            parametersModel.lowerBodyFat = updatedParameters.lowerBodyFat
            parametersModel.higherBodyFat = updatedParameters.higherBodyFat
            parametersModel.lowerMuscleMass = updatedParameters.lowerMuscleMass
            parametersModel.higherMuscleMass = updatedParameters.higherMuscleMass
            await parametersModel.save()
            res.status(200).send("User measurement parameters updated!")
        } catch (err) {
            res.status(400).send("There was an error updating the user measurement parameters!")
        }
    },

    async deleteUserMeasurementParameters(userId) {
        try {
            await db.UserMeasurementParameters.destroy({
                where: {
                    userId: userId
                }
            })
        } catch (err) {
            throw err;
        }
    }
}

export default FitnessController