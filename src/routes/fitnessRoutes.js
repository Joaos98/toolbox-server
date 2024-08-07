import express from "express";
import FitnessController from "../controllers/FitnessController.js";

const fitnessRoutes = express.Router()

fitnessRoutes.get("/workouts", FitnessController.getWorkouts)
fitnessRoutes.post("/workouts", FitnessController.createWorkout)
fitnessRoutes.delete("/workouts", FitnessController.deleteWorkout)

fitnessRoutes.get("/bodyCompositionMeasurements", FitnessController.getBodyCompositionMeasurements)
fitnessRoutes.post("/bodyCompositionMeasurements", FitnessController.createBodyCompositionMeasurement)
fitnessRoutes.delete("/bodyCompositionMeasurements", FitnessController.deleteBodyCompositionMeasurement)

fitnessRoutes.get("/userMeasurementParameters", FitnessController.getUserMeasurementParameters)

export default fitnessRoutes